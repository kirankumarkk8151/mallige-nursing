import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {
  images:any
constructor(private http:HttpClient){}
ngOnInit():void
{
  this.http.get('http://localhost:3000/getimages')
    .subscribe(
      response => {
        this.images=response
        console.log(this.images);
        
      },
      
      error => {
        console.error('Loding failed:', error);
      }
      
    );
}
}
