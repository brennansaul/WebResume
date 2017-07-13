/*
* File:         experience.ts
* Author:       Brennan Saul
* Description:  The class for experiences. Contains a name, title, startDate,
                endDate, location, description, and image.
*               a description.
*
* Edit history:
*
* Editor			Date				Description
* ======			========		===========
* Saul			  06/27/17		File created
* Saul        07/13/17    Added property state used to tell if description will
*                         be hidden.
*/

export class Experience {
    public name: String;
    public title: String;
    public startDate: String;
    public endDate: String;
    public location: String;
    public description: String;
    public image: String;
    public state: String;

    constructor() {
      this.name = "";
      this.title = "";
      this.startDate = "";
      this.endDate = "";
      this.location = "";
      this.description = "";
      this.image = "";
      this.state = "down";
    }
}
