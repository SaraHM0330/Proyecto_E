import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { FaropassComponent } from './faropass/faropass.component';

const routes: Routes = [
  {path: '' , component: FaropassComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaropassRoutingModule {

 }
