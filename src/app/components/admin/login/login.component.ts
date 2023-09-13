import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errormessage=''
user:any
  constructor(private http: HttpClient,private route:Router) {}

  onSubmit() {
    const formData = { username: this.username, password: this.password };

    this.http.post('http://localhost:3000/login', formData)
      .subscribe(
        response => {
          this.user=response
          console.log('Login successful:');
          if(this.user!=null)
          {
            localStorage.setItem('user', JSON.stringify(response));
            this.route.navigateByUrl('/dashboard')
          }
        },
        
        error => {
          this.errormessage=error.error.error
          console.error('Login failed:', error);
        }
        
      );
   

  }
}
