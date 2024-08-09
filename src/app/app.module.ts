import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtListComponent } from './art-list/art-list.component';
import { ProfListComponent } from './prof-list/prof-list.component';
import { WorkListComponent } from './work-list/work-list.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    ProjectListComponent,
    ArtListComponent,
    ProfListComponent,
    WorkListComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
