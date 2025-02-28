import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { TableComponent } from './table/table.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    TableComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TableComponent,
    PlayerComponent
  ]
})
export class ComponentModule { }
