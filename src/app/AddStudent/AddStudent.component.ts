import { Component,OnInit,} from '@angular/core';
import {Router} from '@angular/router';
import {StudentList} from '../student.array';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-Addstudent',
  templateUrl: './AddStudent.component.html'
})
export class AddStudentComponent implements OnInit {
  student=StudentList;
  userFormGroup:FormGroup;
  

constructor(private router:Router,private formBuilder:FormBuilder){}
 
  ngOnInit(){
this.userFormGroup=this.formBuilder.group({
      Id:[" ",Validators.required],
      Name:[" ",Validators.required],
      Department:[" ",Validators.required],
})
  }
AddStudent(){
   this.student.push({
        Id:this.userFormGroup.controls.Id.value,
        Name:this.userFormGroup.controls.Name.value,
        Department:this.userFormGroup.controls.Department.value,
      })
    this.router.navigateByUrl('/Studentlist')
    }
 }
 


