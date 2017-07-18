import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { SkillsComponent} from './skills/skills-display.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './projects/project.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'resume', component: ResumeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ExperiencesComponent,
    WelcomeComponent,
    HeaderComponent,
    ProjectComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
