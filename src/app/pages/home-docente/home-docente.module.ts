import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDocentePageRoutingModule } from './home-docente-routing.module';

import { HomeDocentePage } from './home-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomeDocentePageRoutingModule,
  ],
  declarations: [HomeDocentePage]
})
export class HomeDocentePageModule {}
