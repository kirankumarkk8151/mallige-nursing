import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('iconState', [
      state('menu', style({ transform: 'rotate(0deg)' })),
      state('close', style({ transform: 'rotate(180deg)' })),
      transition('menu <=> close', animate('0.3s ease-in-out'))
    ])
  ]
})
export class NavbarComponent{
  isNavbarOpen = false;


  isNavbarOpened=false
  showFiller = false;

  constructor(private router: Router) {
    // Listen for route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.collapseNavbar();
      }
    });
  }

  // Function to collapse the navbar
  collapseNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
}
clicked()
{
this.isNavbarOpen=!this.isNavbarOpen
}
apply()
{
  this.router.navigate(['/apply']);
}



}

