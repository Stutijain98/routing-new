import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {StudentlistComponent} from './Studentlist/Studentlist.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {APP_LAZY_ROUTING} from './app.lazy.routing';
import {AddStudentComponent} from './AddStudent/AddStudent.component';
import {LoginStudentComponent} from './login-student/login-student.component';
import {EditStudentComponent} from './EditStudent/EditStudent.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,APP_LAZY_ROUTING,RouterModule,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent,StudentlistComponent,AddStudentComponent,LoginStudentComponent,EditStudentComponent ],
  exports:[RouterModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
