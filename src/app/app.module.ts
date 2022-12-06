import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InbuiltPipesComponent } from './inbuilt-pipes/inbuilt-pipes.component';
import { NgFor } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    InbuiltPipesComponent,
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



