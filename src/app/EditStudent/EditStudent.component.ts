import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
 import { StudentList} from '../student.array';
 import{FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-EditStudent',
  templateUrl: './EditStudent.html'
})


export class EditStudentComponent implements OnInit {
  
  EditStudentForm:FormGroup;

  id;

     

constructor(private router:Router ,private ActivatedRoute:ActivatedRoute, private formBuilder:FormBuilder, private Router:Router) { }
 

  ngOnInit(){
   
    this.id = this.ActivatedRoute.snapshot.paramMap.get("userId");
    this.EditStudentForm = this.formBuilder.group({
      Id:[JSON.parse(localStorage.getItem(this.id)).Id,Validators.required],
      Name:[JSON.parse(localStorage.getItem(this.id)).Name,Validators.required],
      Department:[JSON.parse(localStorage.getItem(this.id)).Department,Validators.required],
    });
  }
 continue(){
   
      let data={  Id:this. EditStudentForm.value.id};      
      localStorage.removeItem(this.id);
      localStorage.setItem(this.id,JSON.stringify(data));       
      this.router.navigateByUrl('/Studentlist');
  }

delete()
{
      let data={  Id:this.EditStudentForm.value.Id };  
      localStorage.removeItem(this.id);    
      this.router.navigateByUrl('/Studentlist');
}

   
     
  }
 
