import { Component } from '@angular/core';

import { Experience } from '../shared/models/experience'

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  exps:Experience[] = [
    { name: "Flair Data Systems", title: "Product Development Intern",
      startDate: "6/5/17", endDate: "8/-/17", location: "Plano, Texas",
      description: "...", image: "flair.png" },

    { name: "Student", title: "Social Entrepreurship in Africa",
      startDate: "5/13/17", endDate: "5/30/17", location: "Kigail, Rwanda",
      description: "...", image: "SEA.png" },

    { name: "Crickets Draft House + Grill", title: "Bartender",
      startDate: "6/15/16", endDate: "9/16/16", location: "Waco, Texas",
      description: "Worked in a fast paced environment with no prior bartending experience. "
      + " Through this opportunity, I developed and stregthened the skills that " +
      "apply directly to the food industry and to any occupation that requires " +
      "working with a team. These skills include: customer service, communication, "
      + "multitasking, table waiting, and bartending.",
      image: "crickets.jpeg" },

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
      image: "i5.jpg" },

    { name: "Camp Ozark", title: "Counselor / Campus Representative",
      startDate: "5/14/14", endDate: "8/8/14", location: "Mt. Ida, Arkansas / Waco, Texas",
      description: "While at Camp Ozark I was responsible for 12 middle school / " +
      "high school campers. Daily activities included coaching, instructing " +
      "campers in gun safety, and leading devotionals. After summer employment " +
      "I was selected to be the campus representative where I assisted with the " +
      "recruitment of Counselors for summer 2015.",
      image: "campOzark.png" },

    {  name: "Baylor University", title: "Student",
       startDate: "8/11/14", endDate: "12/16/17", location: "Waco, Texas",
       description: "Major: BSCS Minor: ENT", image: "baylor.png" },

     {  name: "Whitefield Academy", title: "Student",
        startDate: "-", endDate: "5/14/13", location: "Atlanta, Georgia",
        description: "As a student at Whitefield Academy I was very involved. "+
        "I participated in: Varsity football, varisty lacrosse, drama, " +
        "Boy Scouts (Eagle Scout), National Honor Society, and more", image: "wa.png" }
  ]
}
