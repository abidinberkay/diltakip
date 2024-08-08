package com.dilokul.diltakip.model;

import com.dilokul.diltakip.enums.Language;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Class {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", columnDefinition = "CHAR(36)")
    private UUID id;

    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "language", nullable = false)
    private Language language;

    @ManyToOne
    @JoinColumn(name = "teacher_id", nullable = true) // `nullable = true` allows the class to exist without a teacher
    private Teacher teacher;

    @OneToMany(mappedBy = "clazz", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ClassTime> classTimes;
}
