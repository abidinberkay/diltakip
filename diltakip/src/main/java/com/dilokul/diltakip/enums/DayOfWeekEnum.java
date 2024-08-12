package com.dilokul.diltakip.enums;

public enum DayOfWeekEnum {
    MONDAY("Pazartesi"),
    TUESDAY("Salı"),
    WEDNESDAY("Çarşamba"),
    THURSDAY("Perşembe"),
    FRIDAY("Cuma"),
    SATURDAY("Cumartesi"),
    SUNDAY("Pazar");

    private final String turkishName;

    DayOfWeekEnum(String turkishName) {
        this.turkishName = turkishName;
    }

    public String getTurkishName() {
        return turkishName;
    }

    @Override
    public String toString() {
        return turkishName;
    }
}
