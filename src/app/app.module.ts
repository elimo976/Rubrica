import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContattiPreviewComponent } from './components/contatti-preview/contatti-preview.component';
import { ContattiDetailComponent } from './components/contatti-detail/contatti-detail.component';
import { CardModule } from 'primeng/card';
import { AddContattoComponent } from './components/add-contatto/add-contatto.component';

@NgModule({
  declarations: [
    AppComponent,
    ContattiPreviewComponent,
    ContattiDetailComponent,
    AddContattoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    DropdownModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
