import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isVisible:boolean = false
  buttonName:any
  isloading:boolean =false
  panelOpenState = false;
  projectdetails = [
    {id:"1", projectname:"Yoga teaching platform", description:"worked with the team in designing and developing a dynamic web application for a onine yoga teaching platforn, enhancing user engagement and accessibility. Levetaged html,css,javascrit,Angular,Bootstrap, and material UI to create an intutive and responsive user interface", duration:": January 2023 – May 2023"},
    {id:"2", projectname:"Gym portfolio", description:" Designed and developed a dynamic web application showcasing gym details using html,css,javascript. created an interactive platform that effectively communicated gym offerings, class schedule, trauners profiles, and membership information to potentialclients"}
  ]
  technicalSkills = [
    {id:'1', skillName: "Angular" , progress : 95 , imagePath:'../assets/angular2.png'},
    {id:'2', skillName: "HTML", progress : 95, imagePath:'../assets/html.png'},
    {id:'3', skillName: "CSS", progress:80, imagePath:'../assets/CSS.png'},
    {id:'4', skillName: "JavaScript", progress: 89,imagePath:'../assets/js.png'},
    {id:'5', skillName: "Bootstrap",progress:75,imagePath:'../assets/bootstrap.png'},
    {id:'6', skillName: "SQL", progress: 65,imagePath:'../assets/sqllogo.png'}
  ]
  OnClick(){
  
    this.isloading =true
    
  
    setTimeout(() => {
     
        this.isVisible =!this.isVisible
        this.isloading = false
      
    }, 1000);
   
     
  }

}
