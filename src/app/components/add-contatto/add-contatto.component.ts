import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Contatto, ContattoDTO, IndirizzoDTO } from 'src/app/models/contatto';
import { ContattiService } from 'src/app/services/contatti.service';

@Component({
  selector: 'app-add-contatto',
  templateUrl: './add-contatto.component.html',
  styleUrls: ['./add-contatto.component.css']
})
export class AddContattoComponent implements OnInit {
  tipologie: SelectItem[] = [
    { label: 'Persona Fisica', value: 'persona fisica' },
    { label: 'Persona Giuridica', value: 'persona giuridica' }
  ];
  contatto!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cs: ContattiService,
    private router: Router
  ) { }


  contatti: Contatto[] = []
  ngOnInit() {
    this.contatto = this.formBuilder.group({
      selezionaTipologia: ['', Validators.required],
      nome: [''],
      cognome: [''],
      ragioneSociale: [''],
      indirizzo: this.formBuilder.array([
        this.creaIndirizzoGroup()
      ]),
      indirizzoEmail: ['', Validators.required],
      numeroTelefono: ['', Validators.required],
      dataNascita: ['']
    });
    this.cs.getContatti().subscribe({
      next: contatti => {
        this.contatti = contatti;
      },
      error: error => {
        console.error('Errore durante la richiesta HTTP:', error);
        throw error;
      }
    })
  }

  calcolaID(): string {
    let appoggio: number = 0
    for (const element of this.contatti) {
      if (parseInt(element.id) > appoggio) appoggio = parseInt(element.id)
    }
    appoggio++
    return appoggio.toString()
  }

  get indirizzo(): FormArray {
    return this.contatto.get('indirizzo') as FormArray;
  }

  creaIndirizzoGroup(): FormGroup {
    return this.formBuilder.group({
      viaECivico: [''],
      citta: [''],
      provincia: [''],
      cap: [''],
      nazione: ['']
    });
  }

  aggiungiIndirizzo() {
    this.indirizzo.push(this.creaIndirizzoGroup());
  }

  addContatto(): void {
    if (this.contatto.invalid) {
      alert("Controlla i campi obbligatori.");
      return;
    }

    const dataNascitaFormatted = this.formatDate(this.contatto.value.dataNascita);

    const indirizzoDTO: IndirizzoDTO = {
      viaECivico: this.contatto.value.indirizzo[0].viaECivico,
      citta: this.contatto.value.indirizzo[0].citta,
      provincia: this.contatto.value.indirizzo[0].provincia,
      cap: this.contatto.value.indirizzo[0].cap,
      nazione: this.contatto.value.indirizzo[0].nazione
    };

    const contatto: ContattoDTO = {
      id: this.calcolaID(),
      tipologia: this.contatto.value.selezionaTipologia.toLowerCase(),
      nome: this.contatto.value.nome,
      cognome: this.contatto.value.cognome,
      ragioneSociale: this.contatto.value.ragioneSociale,
      indirizzo: [indirizzoDTO], // Trasforma l'indirizzo in un array
      indirizzoEmail: this.contatto.value.indirizzoEmail,
      numeroTelefono: this.contatto.value.numeroTelefono,
      dataNascita: dataNascitaFormatted
    };

    this.cs.addContatto(contatto).subscribe({
      next: (nuovoContatto: Contatto) => {
        if (confirm(`Contatto aggiunto con successo`)) {
          this.router.navigate(['/']);

          this.contatto.reset();
        }
      },
      error: (error) => {
        alert("Ooops! Qualcosa è andato storto.");
      }
    });
  }

  formatDate(dateString: string): string {
    // Formattazione della data da "YYYY-MM-DDTHH:MM:SSZ" a "DD Month YYYY"
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('it-IT', options);
  }

}
