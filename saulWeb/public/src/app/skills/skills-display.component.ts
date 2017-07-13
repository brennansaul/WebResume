/*
 * File:        skills-display.component.ts
 * Author:      Brennan Saul
 * Description: Component to display skills with icons
 *
 * Edit history:
 *
 * Editor   Date		  Description
 * ======   ========	===========
 * Saul     6/23/17   File Created
 */

 import { Component } from '@angular/core';

 @Component({
   selector: 'skills',
   templateUrl: './skills-display.component.html',
   styleUrls: ['./skills-display.component.css']
 })
 export class SkillsComponent {
   // List of Images in the assest/skills folder

   // Operating systems
   osSkills:string[] = [
     "mac.png",
     "linux.png",
     "ubuntu.png",
     "debian.png",
     "windows.png",
   ]

   languages:string[] = [
     "angular.png",
     "bash.png",
     "C.png",
     "Cs.png",
     "Cpp.png",
     "HTML.png",
     "Java.png",
     "mysql.png",
     "bootstrap.png"
   ]

   tools:string[] = [
     "agile.png",
     "docker.png",
     "flume.png",
     "git.png",
     "hadoop.png",
     "zeppelin.png",
     "github.png",
     "putty.png",
     "filezilla.png",
     "cron.png",
     "aws.png"
   ]

   skills:string[] = [
     "agile.png",
     "angular.png",
     "bash.png",
     "C.png",
     "Cs.png",
     "Cpp.png",
     "docker.png",
     "flume.png",
     "git.png",
     "hadoop.png",
     "HTML.png",
     "Java.png",
     "mac.png",
     "mysql.png",
     "ubuntu.png",
     "windows.png",
     "zeppelin.png",
     "debian.png",
     "github.png",
     "putty.png",
     "filezilla.png",
     "cron.png",
     "aws.png",
     "bootstrap.png" ];
 }
