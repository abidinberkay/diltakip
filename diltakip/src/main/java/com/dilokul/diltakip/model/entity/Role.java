package com.dilokul.diltakip.model.entity;

import com.dilokul.diltakip.enums.URole;
import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private URole name;
}
