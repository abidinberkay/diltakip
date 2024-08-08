package com.dilokul.diltakip.enums;

public enum DaysOfWeek {
    MONDAY("Pazartesi"),
    TUESDAY("Salı"),
    WEDNESDAY("Çarşamba"),
    THURSDAY("Perşembe"),
    FRIDAY("Cuma"),
    SATURDAY("Cumartesi"),
    SUNDAY("Pazar");

    private final String turkishName;

    DaysOfWeek(String turkishName) {
        this.turkishName = turkishName;
    }

    public String getTurkishName() {
        return turkishName;
    }
}
