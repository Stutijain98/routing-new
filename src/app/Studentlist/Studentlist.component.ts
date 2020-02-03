import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StudentList} from '../student.array';
@Component({
  selector: 'app-Studentlist',
  templateUrl: './Studentlist.html'
})
export class StudentlistComponent implements OnInit {
 student=StudentList;
constructor(private router:Router){
  
}
  ngOnInit(){
     
  }
  
}