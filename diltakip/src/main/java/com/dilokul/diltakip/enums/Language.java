package com.dilokul.diltakip.enums;

public enum Language {
    ENGLISH("İngilizce"),
    GERMAN("Almanca"),
    RUSSIAN("Rusça"),
    ARABIC("Arapça"),
    TURKISH("Türkçe");

    private final String turkishName;

    Language(String turkishName) {
        this.turkishName = turkishName;
    }

    public String getTurkishName() {
        return turkishName;
    }
}
