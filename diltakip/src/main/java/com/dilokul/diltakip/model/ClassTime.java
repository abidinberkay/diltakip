package com.dilokul.diltakip.model;

import com.dilokul.diltakip.enums.DaysOfWeek;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;
import java.util.UUID;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class ClassTime {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private DaysOfWeek dayOfWeek;
    private LocalTime startTime;
    private LocalTime endTime;

    @ManyToOne
    private Class clazz;

}
