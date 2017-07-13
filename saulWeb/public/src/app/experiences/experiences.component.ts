
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations'

import { Experience } from '../shared/models/experience'

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  animations: [
    trigger('showState', [
      state('down', style({
        'display':'none',
        'color': 'white',
        transform: 'scale(.5)'
      })),
      state('up', style({
        'display':'all',
        'color': 'black',
        transform: 'scale(1)'
      })),
      transition('down <=> up', animate(300)),
    ]),

    trigger('GrowState', [
      state('down', style({
        'height': '150',
        transform: 'scale(1)'
      })),
      state('up', style({
        'height': '100%',
        transform: 'scale(1)'
      })),
      transition('down <=> up', animate(500)),

    ]),
  ],
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  // Initial value for the animation state

  onAnimate(exp: Experience){
    exp.state == 'down' ? exp.state = 'up' : exp.state = 'down';
  }

  exps:Experience[] = [
    { name: "Flair Data Systems", title: "Product Development Intern",
      startDate: "6/5/17", endDate: "8/-/17", location: "Plano, Texas",
      description: "...", image: "flair.png", state: "down" },

    { name: "Student", title: "Social Entrepreurship in Africa",
      startDate: "5/13/17", endDate: "5/30/17", location: "Kigail, Rwanda",
      description: "The “Social Entrepreneurship in Africa” study abroad program "+
      "is a two-week program where students learn about various topics including: "+
      "microfinance, Rwandan history, and the positive effects of developmental "+
      "entrepreneurship. Activities that the SEA program includes are: visiting "+
      "the production location of various Rwandan businesses, meeting with " +
      "microfinance and social development organizations, and observing how these "+
      "organizations and their community groups operate. Additionally, the program "+
      "includes many service driven activities and historical site visits. One " +
      "example of a service activity is coaching a group of high school students " +
      "in a business plan competition. Each Baylor mentor would help their group " +
      "fully develop their business plan and then would help them create their " +
      "final presentation. Each group then presented and were judged on a rubric "+
      "by the Baylor students. At the end of the process an award ceremony was "+
      "held honoring the winning teams and acknowledging all groups that "+
      "participated. The SEA program was an incredible experience where I learned "+
      "about business, social issues, solutions to those issues, and about the " +
      "history and culture of a different part of the world. ", image: "SEA.png", state: "down" },

    { name: "Crickets Draft House + Grill", title: "Bartender",
      startDate: "6/15/16", endDate: "9/16/16", location: "Waco, Texas",
      description: "Worked in a fast paced environment with no prior bartending experience. "
      + " Through this opportunity, I developed and stregthened the skills that " +
      "apply directly to the food industry and to any occupation that requires " +
      "working with a team. These skills include: customer service, communication, "
      + "multitasking, table waiting, and bartending.",
      image: "crickets.jpeg", state: "down" },

    { name: "I5: Rockbridge Senior Living Communities", title: "Consulting Intern",
      startDate: "6/5/15", endDate: "8/8/15", location: "Ningbo, China",
      description: "Collaborated with a multi-national team to evaluate the " +
      "senior care industry in China and to develop a training plan for caregivers " +
      "and senior care administrators for the company’s expansion into China. " +
      "This included forecasted revenue projections over the course of five " +
      "years. Examined China’s growing need for senior care and senior care " +
      "infrastructure. Provided a specialized solution for Rockbridge’s Chinese " +
      "partner, Love for Life, as an entry opportunity into the Chinese market. " +
      "Additionally, developed a scaled solution that could meet China’s enormous " +
      "need for senior care. Strategies were presented to Rockbridge and Love " +
      "for Life through a complete written business plan and a formal presentation. " +
      "Led team presentation of Rockbridge’s service of hiring, training, and " +
      "maintaining a world class senior care staff that was presented to the " +
      "Rockbridge’s CEO and other venture capitalists.",
      image: "i5.jpg", state: "down" },

    { name: "Camp Ozark", title: "Counselor / Campus Representative",
      startDate: "5/14/14", endDate: "8/8/14", location: "Mt. Ida, Arkansas / Waco, Texas",
      description: "While at Camp Ozark I was responsible for 12 middle school / " +
      "high school campers. Daily activities included coaching, instructing " +
      "campers in gun safety, and leading devotionals. After summer employment " +
      "I was selected to be the campus representative where I assisted with the " +
      "recruitment of Counselors for summer 2015.",
      image: "campOzark.png", state: "down" },

    {  name: "Baylor University", title: "Student",
       startDate: "8/11/14", endDate: "12/16/17", location: "Waco, Texas",
       description: "Major: Computer Science | Minor: Entrepreurship", image: "baylor.png", state: "down" },

     {  name: "Whitefield Academy", title: "Student",
        startDate: "-", endDate: "5/14/13", location: "Atlanta, Georgia",
        description: "As a student at Whitefield Academy I was involved "+
        "in: Varsity football, varisty lacrosse, drama, " +
        "Boy Scouts (Eagle Scout), National Honor Society, and more!", image: "wa.png", state: "down" }
  ]
}
