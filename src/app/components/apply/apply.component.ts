import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    
   }
  fullname: string = '';
  email: string = '';
  phone:string='';
  course:string='';
  nationality:string='';
  state:string='';
  age!: number;
  gender:string='';
education:string='';
  percentage!: number;
  yop!: number;
address:string='';
additional:string=''
error:string=''



  onSubmit() {

    window.scrollTo(0, 0);

    if (!this.fullname || !this.email || !this.phone || !this.course || !this.nationality || !this.state ||
      !this.age || !this.gender || !this.education || !this.percentage || !this.yop || !this.address) {
    this.error = 'Please fill in all required fields.';
     // Open the validation modal
     $('#errorToast').toast('show');
    return;
      }

    if (!/^\d{10}$/.test(this.phone)) {
      this.error = 'Invalid phone number format. Please enter a 10-digit number.';
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
        phone: this.phone,
        course: this.course,
        nationality: this.nationality,
        state: this.state,
        age: this.age,
        gender: this.gender,
        education: this.education,
        percentage: this.percentage,
        passingYear: this.yop,
        address: this.address,
        additionalDetails: this.additional
      };

      // Send formData to your backend using HttpClient
      this.http.post('http://localhost:3000/apply', formData).subscribe(
        response => {
          console.log('Application submitted successfully', response);
          $('#successToast').toast('show');
          
          this.fullname  = '';
          this.email = '';
          this.phone ='';
          this.course ='';
          this.nationality ='';
          this.state ='';
          this.age=0;
          this.gender ='';
        this.education ='';
        this.percentage =0;
        this.yop=0;
        this.address ='';
        this.additional =''

          // Reset the form or perform other actions
        },
        error => {
          console.error('Error submitting application', error);
        }
      );
    }
  }
