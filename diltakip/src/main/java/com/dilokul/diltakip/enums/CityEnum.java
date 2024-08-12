package com.dilokul.diltakip.enums;

public enum CityEnum {
    ADANA("Adana"),
    ADIYAMAN("Adıyaman"),
    AFYONKARAHISAR("Afyonkarahisar"),
    AGRI("Ağrı"),
    AMASYA("Amasya"),
    ANKARA("Ankara"),
    ANTALYA("Antalya"),
    ARTVIN("Artvin"),
    AYDIN("Aydın"),
    BALIKESIR("Balıkesir"),
    BILECIK("Bilecik"),
    BINGOL("Bingöl"),
    BITLIS("Bitlis"),
    BOLU("Bolu"),
    BURDUR("Burdur"),
    BURSA("Bursa"),
    CANAKKALE("Çanakkale"),
    CANKIRI("Çankırı"),
    CORUM("Çorum"),
    DENIZLI("Denizli"),
    DIYARBAKIR("Diyarbakır"),
    EDIRNE("Edirne"),
    ELAZIG("Elazığ"),
    ERZINCAN("Erzincan"),
    ERZURUM("Erzurum"),
    ESKISEHIR("Eskişehir"),
    GAZIANTEP("Gaziantep"),
    GIRESUN("Giresun"),
    GUMUSHANE("Gümüşhane"),
    HAKKARI("Hakkâri"),
    HATAY("Hatay"),
    IGDIR("Iğdır"),
    ISPARTA("Isparta"),
    ISTANBUL("İstanbul"),
    IZMIR("İzmir"),
    KAHRAMANMARAS("Kahramanmaraş"),
    KARABUK("Karabük"),
    KARAMAN("Karaman"),
    KARS("Kars"),
    KASTAMONU("Kastamonu"),
    KAYSERI("Kayseri"),
    KILIS("Kilis"),
    KIRIKKALE("Kırıkkale"),
    KIRKLARELI("Kırklareli"),
    KIRSEHIR("Kırşehir"),
    KOCAELI("Kocaeli"),
    KONYA("Konya"),
    KUTAHYA("Kütahya"),
    MALATYA("Malatya"),
    MANISA("Manisa"),
    MARDIN("Mardin"),
    MERSIN("Mersin"),
    MUGLA("Muğla"),
    MUS("Muş"),
    NEVSEHIR("Nevşehir"),
    NIGDE("Niğde"),
    ORDU("Ordu"),
    OSMANIYE("Osmaniye"),
    RIZE("Rize"),
    SAKARYA("Sakarya"),
    SAMSUN("Samsun"),
    SIIRT("Siirt"),
    SINOP("Sinop"),
    SIVAS("Sivas"),
    SANLIURFA("Şanlıurfa"),
    SIRNAK("Şırnak"),
    TEKIRDAG("Tekirdağ"),
    TOKAT("Tokat"),
    TRABZON("Trabzon"),
    TUNCELI("Tunceli"),
    USAK("Uşak"),
    VAN("Van"),
    YALOVA("Yalova"),
    YOZGAT("Yozgat"),
    ZONGULDAK("Zonguldak");

    private final String cityName;

    CityEnum(String cityName) {
        this.cityName = cityName;
    }

    public String getCityName() {
        return cityName;
    }

    @Override
    public String toString() {
        return cityName;
    }
}
