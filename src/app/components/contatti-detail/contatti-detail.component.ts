import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Contatto } from 'src/app/models/contatto';
import { ContattiService } from 'src/app/services/contatti.service';

@Component({
  selector: 'app-contatti-detail',
  templateUrl: './contatti-detail.component.html',
  styleUrls: ['./contatti-detail.component.css']
})
export class ContattiDetailComponent implements OnInit {

  contatto!: Contatto;
  contatti: Contatto[] = [];

  constructor(
    private cs: ContattiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        const id = params['id'];
        this.cs.getContattoById(id)
          .pipe(
            catchError(error => {
              console.error('Errore durante la richiesta HTTP:', error);
              throw error;
            })
          )
          .subscribe(contatto => {
            this.contatto = contatto;
          })
      })
  }
  eliminaContatto(id: string): void {
    this.cs.deleteContatto(id)
      .subscribe({
        next: (dati) => {
          if (confirm('Sei sicuro di voler eliminare questo contatto?')) {
            // this.ngOnInit() // ho provato ad usarlo come visto a lezione, ma dà problemi nella chiamata al server
            this.contatti = this.contatti
              .filter(contatto => contatto.id !== id);
            this.router.navigate(['/contatti']);
          } 
        },
        error: (error) => {
          alert("Spiacenti! Errore nella chiamata al server.");
        }
      });
  }
}
