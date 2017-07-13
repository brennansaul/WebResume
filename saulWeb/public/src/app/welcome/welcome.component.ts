/*
* File:        welcome.component.ts
* Author:      Brennan Saul
* Description: Component to display display the welcome screen
*
* Edit history:
*
* Editor   Date		  Description
* ======   ========	===========
* Saul     6/25/17   File Created
*/

import { Component } from '@angular/core';

@Component({
selector: 'welcome',
templateUrl: './welcome.component.html',
styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  message:string = "Thank you for taking the time to learn a little bit" +
    " about me! I am a student at Baylor University majoring in computer science" +
    " with a minor in entrepreneurship. While at Baylor I have focused on" +
    " developing myself through diverse leadership, service, and work experiences" +
    " that pushed me outside of my comfort zone time and time again." +
    " These opportunities have ranged from organizing and hosting tailgates with" +
    " my freshman roommates, to working in Ningbo, China as a student consultant" +
    " evaluating the Senior Care Industry as a potential prospect for United" +
    " States senior care consulting specialists. I would describe myself as a" +
    " driven, fun, and outgoing individual who likes to learn new things and to" +
    " be a part of something greater than myself. After I graduate in December" +
    " 2017 I hope to work in a full stack software development environment: Creating" +
    " solutions and solving problems from backend to frontend. Thank you for" +
    " visiting my page! If you have any questions please contact me at" +
    " James_Saul@baylor.edu.";
}
