package com.dilokul.diltakip.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", columnDefinition = "CHAR(36)")
    private UUID id;

    private String name;
    private String tckn;
    private String surname;
    private String phone;
    private String secondPhone;
    private String address;
    private LocalDateTime registrationDate;

    @UpdateTimestamp
    @Column(name = "update_time")
    private LocalDateTime updateTime;

    @Column(name = "created_on", nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDateTime createdOn;

    @ManyToOne
    @JoinColumn(name = "class_id", nullable = true) // Nullable allows the student to exist without a class
    private Class clazz;
}
