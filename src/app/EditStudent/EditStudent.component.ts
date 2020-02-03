import { Component,OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
// import { StudentList} from '../student.array';
@Component({
  selector: 'app-EditStudent',
  templateUrl: './EditStudent.html'
})


export class EditStudentComponent implements OnInit {
  // student=StudentList;
id=''

     

constructor(private router:Router ,private ActRou:ActivatedRoute){
 
}
  ngOnInit(){
    //  console.log(StudentList)
     this.id=this.ActRou.snapshot.paramMap.get("id");
    //  this.student.filter("Id":this.id);
    //  console.log(this.student[1].Id);
  }

}