import { Component,OnInit } from '@angular/core';

import * as $ from 'jquery';
import 'owl.carousel'; // Import Owl Carousel
import AOS from 'aos'
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {
  announcments:any
  events:any
  isMarqueeStopped = false;
  constructor(private router:Router,private http:HttpClient)
  {
    
  }
  
  stopMarquee(): void {
    this.isMarqueeStopped = true;
  }

  startMarquee(): void {
    this.isMarqueeStopped = false;
  }
  ngOnInit(): void {
    window.onload = () => {
      AOS.init();
    };
   
    
      this.http.get('http://localhost:3000/getannouncment')
      .subscribe(
        response => {
          this.announcments=response
          console.log(this.announcments);
          
        },
        
        error => {
          console.error('Login failed:', error);
        }
        
      );


      this.http.get('http://localhost:3000/getEvent')
      .subscribe(
        response => {
          this.events=response
          console.log(this.events);
          
        },
        
        error => {
          console.error('Login failed:', error);
        }
        
      );
  }
  apply()
{
  this.router.navigate(['/apply']);
}
  }



   