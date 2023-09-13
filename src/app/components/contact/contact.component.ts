import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http: HttpClient) { }
  fullname: string = '';
  email: string = '';
  subject:string='';
  message:string='';
  
error=''

  onSubmit() {
    const containerElement = document.getElementById('myContainer');
  if (containerElement) {
    containerElement.scrollIntoView({ behavior: 'smooth' });
  }
    if (!this.fullname || !this.email || !this.subject || !this.message) {
    this.error = 'Please fill in all required fields.';
     // Open the validation modal
     $('#errorToast').toast('show');
    return;
      }

      
      if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(this.email)) {
        this.error = 'Invalid email address format.';
        $('#errorToast').toast('show');
        return;
      }
      
      if (!/^[A-Za-z\s]+$/.test(this.fullname)) {
        this.error = 'Full name can only contain letters and spaces.';
        $('#errorToast').toast('show');
        return;
      }

   
      const formData = {
        fullName: this.fullname,
        email: this.email,
        subject: this.subject,
        message: this.message,
        
      };

      // Send formData to your backend using HttpClient
      this.http.post('http://localhost:3000/contact', formData).subscribe(
        response => {
          console.log('Application submitted successfully', response);
          this.fullname = '';
  this.email = '';
  this.subject='';
  this.message='';
          $('#successToast').toast('show');
          // Reset the form or perform other actions
        },
        error => {
          console.error('Error submitting application', error);
        }
      );
    }
  }

