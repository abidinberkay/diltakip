package com.dilokul.diltakip.model.entity;

import com.dilokul.diltakip.enums.CityEnum;
import jakarta.persistence.*;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "teacher")
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    @Size(min = 11, max = 11, message = "TCKN must be 11 digits")
    @Pattern(regexp = "\\d+", message = "TCKN must be numeric")
    @Column(name = "tckn")
    private String tckn;
    private String surname;
    private String phone;

    @Enumerated(EnumType.STRING)
    private CityEnum city;
    @Column(name = "second_phone")
    private String secondPhone;
    private String address;

    @UpdateTimestamp
    @Column(name = "update_time")
    private LocalDateTime updateTime;

    @Column(name = "created_on", nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDateTime createdOn;

}
