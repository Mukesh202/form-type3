import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrupingformComponent } from './grupingform/grupingform.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    GrupingformComponent,
    FormbuilderComponent,
    FormcontrolComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormBuilder
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
