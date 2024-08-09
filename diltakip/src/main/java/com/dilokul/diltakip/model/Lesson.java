package com.dilokul.diltakip.model;

import com.dilokul.diltakip.enums.Language;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;


@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "class")
public class Class {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "id", nullable = false, columnDefinition = "VARCHAR(36)")
    private String id;

    private String name;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private Language language;

    @Column(name = "teacher_id")
    private String teacherId;
}

