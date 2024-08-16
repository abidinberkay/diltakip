package com.dilokul.diltakip.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "class")
public class Class {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;

    private String language;

    @Column(name = "teacher_id")
    private Long teacherId;

    private Long capacity;

    @Column(name = "number_of_students")
    private Long numberOfStudent;
}

