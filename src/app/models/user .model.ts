export interface  User {
    error: string;
    fa: string;
    fi: string;
    bkz: string;    // Benutzerkuerzel
    pnr: string;
    name: string;
    abt: string;
    art: string;
    austritt: string;
    berechtigung: 'NO' | 'SB' | 'LG' | 'WH' | 'BH' | 'IT';
}

/*
    fa (string, optional): nur bei ASPxxADM zum Firmawechsel,
    fi (string, optional): nur bei ASPxxADM (immer 01),
    error (string): { empty (=false) | Fehlermeldung },
    bkz (string): Benutzerkürzel,
    pnr (string): Personalnummer,
    name (string): Name,
    abt (string): Abteilung,
    art (string): Personalart,
    austritt (string): Austrittsdatum,
    auth (boolean): authentifiziert: Care-Anmeldung geprüft {true | false}
*/