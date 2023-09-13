import { Component } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos'
@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent {
  constructor(private router: Router)
  {
  
  }
  ngOnInit(): void {
      AOS.init()
  }
  title:string="About Us"
  sub:string=""
  
  
    navigateToCeo() {
      this.router.navigate(['/ceo']);
    }
    navigateToChairman() {
      this.router.navigate(['/chairman']);
    }
    navigateToSecretary() {
      this.router.navigate(['/secretary']);
    }
    navigateToDirector() {
      this.router.navigate(['/director']);
    }
    navigateToPrincipal() {
      this.router.navigate(['/principal']);
    }
}
