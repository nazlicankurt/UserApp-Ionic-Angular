import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainContentPageRoutingModule } from './main-content-routing.module';

import { MainContentPage } from './main-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainContentPageRoutingModule
  ],
  declarations: [MainContentPage]
})
export class MainContentPageModule {}
