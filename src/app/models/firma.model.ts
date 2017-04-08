export interface Firma {
//    error: string;
    fa: string;
    fi: string;
    name: string;       // Name von Firma/Filiale
    fils: string[];
    ip: string;
    client: string;     // Name des Client-PC
}

/*
    error (string): { empty (=false) | Fehlermeldung },
    fa (string): Firma,
    fi (string): Filiale,
    fils (array of strings): alle Filialen der Firma,
    client (string): Name des Arbeitsplatzes,
    name (string): Name der Firma/Filiale,
    db (string): Name der REPDBFxx
 */