import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  applications:any
  contacts:any
  announcments:any
  events:any
  images:any
  user:any
  title_image: string = '';
  description_image: string = '';
  no_applications=0
  no_messages=0
  no_announcments=0
  no_images=0
  no_users=0
  selectedImage: File | null = null;
  constructor(private http: HttpClient,private router:Router) {}
  ngOnInit(): void {
  
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log("user",userData)
    }
    else{
      this.router.navigateByUrl('/')
    }
  
    this.http.get('http://localhost:3000/applications')
    .subscribe(
      response => {
        this.applications=response
        console.log(this.applications);
        this.no_applications=this.applications.length
        console.log(this.no_announcments,this.no_applications,this.no_images,this.no_messages,this.no_users)
        
      },
      
      error => {
        console.error('Login failed:', error);
      }
      
    );
    this.http.get('http://localhost:3000/getcontact')
    .subscribe(
      response => {
        this.contacts=response
        console.log(this.contacts);
        this.no_messages=this.contacts.length
        console.log(this.no_announcments,this.no_applications,this.no_images,this.no_messages,this.no_users)
      },
      
      error => {
        console.error('Login failed:', error);
      }
      
    );
    this.http.get('http://localhost:3000/getimages')
    .subscribe(
      response => {
        this.images=response
        console.log(this.images);
        this.no_images=this.images.length
        console.log(this.no_announcments,this.no_applications,this.no_images,this.no_messages,this.no_users)
        
      },
      
      error => {
        console.error('Login failed:', error);
      }
      
    );


    this.http.get('http://localhost:3000/getannouncment')
      .subscribe(
        response => {
          this.announcments=response
          console.log(this.announcments);
          this.no_announcments=this.announcments.length
          console.log(this.no_announcments,this.no_applications,this.no_images,this.no_messages,this.no_users)
          
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


      
      
     
      this.no_users=this.user.length
      
      
  }

  deleteContact(contactId: string) {
    const url = 'http://localhost:3000/deletecontact/'+contactId
    this.http.delete(url).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
      },
      error => {
        console.error('Error deleting contact:', error);
      }
    );
  }

  logout()
  {
    console.log('called')
    localStorage.removeItem('user');
    this.router.navigateByUrl('/')
  }

  deleteImage(imageId: string) {
    const url = 'http://localhost:3000/deleteImage/'+imageId
    this.http.delete(url).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
      },
      error => {
        console.error('Error deleting contact:', error);
      }
    );
  }

  deleteApplication(applicationId: string) {
    const url = 'http://localhost:3000/deleteapplication/'+applicationId
    this.http.delete(url).subscribe(
      (response) => {
        console.log(response);
        this.ngOnInit();
      },
      error => {
        console.error('Error deleting Application:', error);
      }
    );
  }


  title: string = '';
  description: string = '';
  date:string='';
  month:string='';
  year:string='';
  startTime:string='';
  endTime:string='';




  addAnnouncment() {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('date', this.date);
    formData.append('month', this.month);
    formData.append('year', this.year);
    formData.append('startTime', this.startTime);
    formData.append('endTime', this.endTime);
    if (this.selectedImage) {
      formData.append('image', this.selectedImage, this.selectedImage.name);
    }
    
    this.http.post('http://localhost:3000/announcment', formData).subscribe(
      response => {
        console.log('Announcement added successfully', response);
        this.ngOnInit(); // Reset the form or perform other actions
      },
      error => {
        console.error('Error adding announcement', error);
      }
    );
  }
  





    

id_edit:string=''
    title_edit: string = '';
    description_edit: string = '';
    date_edit:string='';
    month_edit:string='';
    year_edit:string='';
    startTime_edit:string='';
    endTime_edit:string='';


    editAnnouncment() {
   
      const announcmentData = {
        title:this.title_edit,
  description:this.description_edit,
  date:this.date_edit,
  month:this.month_edit,
  year:this.year_edit,
  startTime:this.startTime_edit,
  endTime :this.endTime_edit   }

      // Send formData to your backend using HttpClient
      this.http.put('http://localhost:3000/editAnnouncement/'+this.id_edit, announcmentData).subscribe(
        response => {
          console.log('Application submitted successfully', response);
          this.ngOnInit();
          // Reset the form or perform other actions
        },
        error => {
          console.error('Error submitting application', error);
        }
      );
    }
    editAnn(edit:any)
    {
      this.id_edit=edit._id
      this.title_edit=edit.title
    this.description_edit=edit.description
    this.date_edit =edit.date
     this.month_edit=edit.month
       this.year_edit =edit.year
        this.startTime_edit=edit.startTime 
         this.endTime_edit =edit.endTime
           }



           deleteAnnoncemnent(announcementId: string) {
            const url = 'http://localhost:3000/deleteAnnouncment/'+announcementId
            this.http.delete(url).subscribe(
              (response) => {
                console.log(response);
                this.ngOnInit();
              },
              error => {
                console.error('Error deleting Application:', error);
              }
            );
          }










          title_event: string = '';
          description_event: string = '';
          date_event:string='';
          month_event:string='';
          year_event:string='';
          
  addEvent() {
   
    const eventData = {
      title:this.title_event,
description:this.description_event,
date:this.date_event,
month:this.month_event,
year:this.year_event,
   }

    // Send formData to your backend using HttpClient
    this.http.post('http://localhost:3000/event', eventData).subscribe(
      response => {
        console.log('Application submitted successfully', response);
        this.ngOnInit();
        // Reset the form or perform other actions
      },
      error => {
        console.error('Error submitting application', error);
      }
    );
  }

id_edit_event:string=''
  title_edit_event: string = '';
  description_edit_event: string = '';
  date_edit_event:string='';
  month_edit_event:string='';
  year_edit_event:string='';
 


  editEvent() {
 
    const eventData = {
      title:this.title_edit_event,
description:this.description_edit_event,
date:this.date_edit_event,
month:this.month_edit_event,
year:this.year_edit_event,
  }

    // Send formData to your backend using HttpClient
    this.http.put('http://localhost:3000/editEvent/'+this.id_edit_event, eventData).subscribe(
      response => {
        console.log('Application submitted successfully', response);
        this.ngOnInit();
        // Reset the form or perform other actions
      },
      error => {
        console.error('Error submitting application', error);
      }
    );
  }
  editEv(edit:any)
  {
    this.id_edit_event=edit._id
    this.title_edit_event=edit.title
  this.description_edit_event=edit.description
  this.date_edit_event =edit.date
   this.month_edit_event=edit.month
     this.year_edit_event =edit.year
      
         }



         deleteEvent(eventId: string) {
          const url = 'http://localhost:3000/deleteEvent/'+eventId
          this.http.delete(url).subscribe(
            (response) => {
              console.log(response);
              this.ngOnInit();
            },
            error => {
              console.error('Error deleting Application:', error);
            }
          );
        }







        onImageSelected(event: any) {
          if (event.target.files.length > 0) {
            this.selectedImage = event.target.files[0];
          }
        }
      
        onSubmitImage() {
          const formData = new FormData();
          formData.append('title', this.title_image);
          formData.append('description', this.description_image);
          if (this.selectedImage) {
            formData.append('image', this.selectedImage, this.selectedImage.name);
          }
      
          this.http.post('http://localhost:3000/upload', formData).subscribe(
            response => {
              console.log('Image uploaded successfully:', response);
             
              // Reset the inputs
              this.title = '';
              this.description = '';
              this.selectedImage = null;
              this.ngOnInit();
            },
            error => {
              console.error('Error uploading image:', error);
            }
          );
        }
nemail=''
nusername=''
npassword=''
cpassword=''
registerMessage=''
registerData:any={
  username:'',
  password:'',
  email:''

}

        registerUser()
        {
          if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(this.nemail)) {
            this.registerMessage = 'Invalid email address format.';
            $('#errorToast').toast('show');
            return;
          }
          if (this.npassword!=this.cpassword)
          {
            this.registerMessage="Passwords not matched!!"
            $('#errorToast').toast('show');
            return
          }
          else if(this.npassword.length<6)
          {
            this.registerMessage="Passwords must be atleast 6 characters long"
            $('#errorToast').toast('show');
            return
          }

          const registerData:any={
            username:this.nusername,
            password:this.npassword,
            email:this.nemail
          
          }
      
      
          // Send formData to your backend using HttpClient
          this.http.post('http://localhost:3000/signup', registerData).subscribe(
            response => {
              console.log('Register successfully', response);
              this.ngOnInit();
              this.registerMessage='User Added Succesfully'
              $('#successToast').toast('show');
              // Reset the form or perform other actions
            },
              // Reset the form or perform other actions
           
            error => {
              this.registerMessage=error.error.error
              $('#errorToast').toast('show');
              console.error('Error submitting application', error.error);
            }
          );
        }


expass=''
newpass=''
confpass=''
        changePassword()
        {
          if (this.newpass!=this.confpass)
          {
            this.registerMessage="Passwords not matched!!"
            $('#errorToast').toast('show');
            return
          }
          else if(this.newpass.length<6)
          {
            this.registerMessage="Passwords must be atleast 6 characters long"
            $('#errorToast').toast('show');
            return
          }
          const changeData:any={
            userId:this.user.user._id,
            currentPassword:this.expass,
           newPassword :this.newpass

          
          }
      
      
          // Send formData to your backend using HttpClient
          this.http.post('http://localhost:3000/changepassword', changeData).subscribe(
            response => {
              console.log('password changed successfully', response);
              this.ngOnInit();
              this.registerMessage='password changed successfully'
              $('#successToast').toast('show');
              // Reset the form or perform other actions
            },
              // Reset the form or perform other actions
           
            error => {
              this.registerMessage=error.error.error
              $('#errorToast').toast('show');
              console.error('Error submitting application', error.error);
            }
          );
        }
      }










