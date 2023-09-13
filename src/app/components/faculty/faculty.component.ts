import { Component,OnInit } from '@angular/core';
import AOS from 'aos'
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit{

  ngOnInit(): void {
   AOS.init();   
  }
}
