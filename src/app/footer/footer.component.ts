import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  value:any
  skillId:any
  submitquery:FormGroup
  nameerror:any
  mailerror:any
  commentserror:any
  popup = false
  formdata:any;
  name:any;
  showButton: boolean = false;

  constructor( private formbuilder: FormBuilder ){
    this.submitquery = this.formbuilder.group({
      fname:[null ,Validators.required],
      email:[null, Validators.required],
      comments:[null,Validators.required],

    })
  }
  Onsubmit(){
   
    
  

    if(this.submitquery.value.fname == null || this.submitquery.value.fname == '' ){
      this.nameerror = "please enter name"
     
      
    }
    else{
      this.nameerror = null
    }
    if(this.submitquery.value.email == null || this.submitquery.value.email == '' ){
      this.mailerror ="please enter mail id"
    }
    else{
      this.mailerror = null
    }
    if(this.submitquery.value.comments ==null || this.submitquery.value.comments == '' ){
      this.commentserror = "please type any message"
    }
    else{
     this.commentserror = null
    }
    // if(this.submitquery.valid){
    //   console.log("submitted", this.submitquery.value);
      
      
    // }
    
      if(this.submitquery.value.fname == null || this.submitquery.value.fname == '' && this.submitquery.value.email == null || this.submitquery.value.email == '' && this.submitquery.value.comments ==null || this.submitquery.value.comments == ''){
        this.popup = false

      }
      else{
        this.popup = true
      
      }
   
    // forms_code
       
   
    
  
  }
}
