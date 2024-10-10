export const genericerrorMessages_HR = {
    InvalidJWT: {
        description: "Niste prijavljeni - ponovno se prijavite",
        statusCode: 401,
        resolution: "JWT može biti istekao ili neispravno formatiran, osigurajte da je JWT valjan."
    },
    InvalidRequest: {
        description: "Zahtjev nije ispravno oblikovan.",
        statusCode: 400,
        resolution: "Pregledajte parametre i strukturu zahtjeva, osigurajte da ispunjava zahtjeve API-ja."
    },
    EntityTooLarge: {
        description: "Entitet koji se prenosi je prevelik.",
        statusCode: 413,
        resolution: "Provjerite je li maksimalna veličina datoteke veća ili jednaka resursu koji pokušavate prenijeti."
    },
    InternalError: {
        description: "Došlo je do interne greške na poslužitelju.",
        statusCode: 500,
        resolution: "Istražite poslužiteljske zapisnike kako biste identificirali uzrok. Ako sumnjate na problem s pohranom, kontaktirajte podršku."
    },
    ResourceAlreadyExists: {
        description: "Navedeni resurs već postoji.",
        statusCode: 409,
        resolution: "Koristite drugi naziv ili identifikator za resurs kako biste izbjegli sukobe. Koristite zaglavlje x-upsert:true za prepisivanje resursa."
    },
    AccessDenied: {
        description: "Pristup navedenom resursu je odbijen.",
        statusCode: 403,
        resolution: "Provjerite imate li ispravnu RLS politiku za pristup ovom resursu."
    },
    ResourceLocked: {
        description: "Navedeni resurs je zaključan.",
        statusCode: 423,
        resolution: "Ovaj resurs ne može se mijenjati dok je zaključan. Pričekajte i pokušajte ponovno."
    },
};
