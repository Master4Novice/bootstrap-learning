import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BootstrapListComponent } from './bootstrap-list/bootstrap-list.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { BootstrapButtonComponent } from './bootstrap-button/bootstrap-button.component';
import { BootstrapIconsComponent } from './bootstrap-icons/bootstrap-icons.component';
import { BootstrapDropComponent } from './bootstrap-drop/bootstrap-drop.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapListComponent,
    BootstrapTableComponent,
    BootstrapButtonComponent,
    BootstrapIconsComponent,
    BootstrapDropComponent,
    BootstrapFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
