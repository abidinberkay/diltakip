package com.dilokul.diltakip.controller;

import com.dilokul.diltakip.config.jwt.JWTUtility;
import com.dilokul.diltakip.exception.UserAlreadyExistsException;
import com.dilokul.diltakip.model.dto.UserDto;
import com.dilokul.diltakip.model.dto.jwt.JwtRequest;
import com.dilokul.diltakip.model.dto.jwt.JwtResponse;
import com.dilokul.diltakip.model.dto.jwt.SignUpRequestDto;
import com.dilokul.diltakip.model.entity.Users;
import com.dilokul.diltakip.service.UserAuthService;
import com.dilokul.diltakip.service.UsersService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
@CrossOrigin
@RequiredArgsConstructor
public class AuthController {

    @Value("${cookie.secure}")
    private boolean cookieSecure;

    private final JWTUtility jwtUtility;
    private final AuthenticationManager authenticationManager;
    private final UserAuthService userAuthService;
    private final UsersService userService;
    private final ModelMapper modelMapper;

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody @Valid JwtRequest jwtRequest, HttpServletResponse response) {
        try {
            // Attempt to authenticate the user
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            jwtRequest.getEmail(),
                            jwtRequest.getPassword()
                    )
            );

            // If authentication is successful, generate token and set cookie
            final UserDetails userDetails = userAuthService.loadUserByUsername(jwtRequest.getEmail());
            final String token = jwtUtility.generateToken(userDetails, jwtRequest.getPlatform());

            // Get user details and return response
            Users user = userService.getUserByEmail(jwtRequest.getEmail())
                    .orElseThrow(() -> new Exception("User not found"));
            UserDto userDto = modelMapper.map(user, UserDto.class);
            userDto.setPassword(""); // Ensure password is not exposed
            JwtResponse jwtResponse = JwtResponse.builder()
                    .jwtToken(token)
                    .user(userDto)
                    .build();

            return ResponseEntity.ok(jwtResponse);

        } catch (Exception e) {
            // Handle exceptions such as invalid credentials
            return ResponseEntity.status(HttpServletResponse.SC_UNAUTHORIZED)
                    .body("Invalid credentials");
        }
    }



    @PostMapping("/signup")
    public UserDto registerUser(@Valid @RequestBody SignUpRequestDto user, BindingResult result) throws UserAlreadyExistsException {
        Users userToSave = modelMapper.map(user, Users.class);
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        userToSave.setPassword(passwordEncoder.encode(userToSave.getPassword()));

//        Set<String> strRoles = user.getRole();
//        Set<Role> roles = new HashSet<>();
//
//        if (strRoles == null) {
//            Role userRole = roleRepository.findByName(URole.USER)
//                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//            roles.add(userRole);
//        } else {
//            strRoles.forEach(role -> {
//                switch (role) {
                    //Example for other roles
//                    case "admin":
//                        Role adminRole = roleRepository.findByName(URole.ADMIN)
//                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//                        roles.add(adminRole);
//
//                        break;
//                    default:
//                        Role userRole = roleRepository.findByName(URole.USER)
//                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//                        roles.add(userRole);
//                }
//            });
//        }
//        userToSave.setRoles(roles);
//        userToSave.setSpecialType(user.getSpecialType());
//        userToSave.setUserType(UserType.GUEST);

//        if (result.hasErrors()) {
//            List<ObjectError> message = result.getAllErrors();
//            throw new SignUpPasswordComplexityException(message.get(0).getDefaultMessage());
//        }

//        boolean prod = Environment.PROD.name().equalsIgnoreCase(activeProfile);
//        if (!prod) {
//            userToSave.setMailApproved(true);
//        }

        Users savedUser = userAuthService.saveUser(userToSave);

//        if (!prod) {
//            //we are not sending mail for non prod environment
//            return modelMapper.map(savedUser, UserDto.class);
//        }

//        String userId = savedUser.getId();
//
//        String temporaryTokenUUID = UUID.randomUUID().toString();
//        UserVerifyToken userVerifyToken = new UserVerifyToken();
//        userVerifyToken.setUserId(userId);
//        userVerifyToken.setToken(temporaryTokenUUID);
//        userVerifyTokenRepository.save(userVerifyToken);

        return modelMapper.map(savedUser, UserDto.class);
    }

    @GetMapping("/check-auth")
    public ResponseEntity<?> checkAuth(HttpServletRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated() && !(authentication instanceof AnonymousAuthenticationToken)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }



}
