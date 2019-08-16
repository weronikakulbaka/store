import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../core/header/header.component';
import { SharedModule } from './shared.module';
import { MainPageComponent } from '../main-page/main-page.component';
import { SliderComponent } from '../slider/slider.component';
import { RecommendedCardComponent } from '../recommended-card/recommended-card.component';
import { SingleCardComponent } from '../single-card/single-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainPageComponent,
    SliderComponent,
    RecommendedCardComponent,
    SingleCardComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HeaderComponent]
})
export class ComponentsModule { }
