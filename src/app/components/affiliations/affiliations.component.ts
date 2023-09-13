import { Component } from '@angular/core';
import AOS from 'aos'
@Component({
  selector: 'app-affiliations',
  templateUrl: './affiliations.component.html',
  styleUrls: ['./affiliations.component.css']
})
export class AffiliationsComponent  {
  ngOnInit(): void {
    AOS.init()
}
}
