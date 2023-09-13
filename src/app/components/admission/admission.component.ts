import { Component,OnInit} from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  ngOnInit(): void {
   AOS.init()
  }

}
