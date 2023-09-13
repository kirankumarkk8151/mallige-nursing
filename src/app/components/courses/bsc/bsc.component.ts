import { Component } from '@angular/core';
import AOS from 'aos'
@Component({
  selector: 'app-bsc',
  templateUrl: './bsc.component.html',
  styleUrls: ['./bsc.component.css']
})
export class BscComponent {
constructor()
{
  AOS.init()
}
}
