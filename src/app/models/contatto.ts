export interface Contatto {
    id: string;
    tipologia: string;
    nome: string;
    cognome: string;
    ragioneSociale: string;
    indirizzo: Indirizzo[];
    indirizzoEmail: string;
    numeroTelefono: string;
    dataNascita: string;
  }
  
  export interface Indirizzo {
    viaECivico: string;
    citta: string;
    provincia: string;
    cap: string;
    nazione: string;
  }

export class ContattoDTO {
  constructor(
          public id: string = "",
          public tipologia: string = "",
          public nome: string = "",
          public cognome: string = "",
          public ragioneSociale: string = "",
          public indirizzo: IndirizzoDTO[] = [],
          public indirizzoEmail: string = "",
          public numeroTelefono: string = "",
          public dataNascita: string = ""
        ) { }
}
  
export class IndirizzoDTO {
    constructor(
        public viaECivico: string = "",
        public citta: string = "",
        public provincia: string = "",
        public cap: string = "",
        public nazione: string = ""
  
    ) { }
}
