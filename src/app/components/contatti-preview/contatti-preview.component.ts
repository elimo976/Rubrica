import { Component, OnInit, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contatto } from 'src/app/models/contatto';
import { ContattiService } from 'src/app/services/contatti.service';

@Component({
  selector: 'app-contatti-preview',
  templateUrl: './contatti-preview.component.html',
  styleUrls: ['./contatti-preview.component.css']
})
export class ContattiPreviewComponent implements OnInit {
  contatti: Contatto[] = [];

  constructor(private cs: ContattiService) { }
  
  ngOnInit(): void {
    this.cs.getContatti().subscribe(contatti => this.contatti = contatti);
  }
}
