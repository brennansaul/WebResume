
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
        opacity: 0
      })),
      state('up', style({
        'display':'all',
        'color': 'black',
        opacity: 1
      })),
      transition('down => up', [
        style({
          opacity: 0,
        }),
        animate(300)
      ]),
      transition('up => down', [
        style({
          opacity: 1,
        }),
        animate(300)
      ])
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
      description: "As a Technology Development Intern at Flair Data Systems I "+
      "worked on both development and new-product projects. Through these projects "+
      "I was introduced and familiarized with new technologies. I researched to "+
      "understand the concept of each tool, and would implemented that tool into "+
      "my current project. The main operating systems, software tools, and "+
      "languages that I worked with included: Ubuntu, macOS, Raspberry Pi, "+
      "Zeppelin, Hadoop, Flume, Docker, GitHub, Docker Hub, Amazon Web Services, "+
      "Bash, and JavaScript. Examples of what I did with these "+
      "technologies include but are not limited to the following: Configured a "+
      "Hadoop cluster of 3 nodes. Set up a Flume agent to send data from a source "+
      "through a channel to a HDFS sink. I wrote Dockerfiles and grouped them "+
      "with required configuration files in order to build an image. I created "+
      "a GitHub repository using directories, representing an image, to cleanly "+
      "store all files required to build an image. I linked each directory to a "+
      "unique Docker Hub repository so that each image could be built, accessed "+
      "and run on any machine. I developed a lab driven learning platfrom that " +
      "coveres the concepts and capabilities of Docker a well how to use the " +
      "Docker Engine. In addition to working on projects, I was asked " +
      "to write technical documentation. Examples of the documentation I wrote "+
      "include: A step by step instruction guide for installing / configuring "+
      "different technologies, and two versions of a formatted service set up "+
      "guide that will be used by Flair Data Systems representatives and "+
      "customers. These guides include software version information, detailed "+
      "steps, staged screen shots, and commands that are required to execute, "+
      "configure, or install software. For greater understanding, documentation "+
      "included original figures that illustrated: dataflow, program execution, "+
      "project architecture, and software tool concepts. Both of these guides "+
      "used a professional template I created that will be used for all future "+
      "documentation. ", image: "flair.png", state: "down" },

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
