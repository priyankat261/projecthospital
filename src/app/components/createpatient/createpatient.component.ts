import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { PatientserviceService } from '../../Services/patientservice.service';
import { Patient } from '../../models/Patient';


@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrl: './createpatient.component.css'
})
export class CreatepatientComponent {
  constructor(private service:PatientserviceService,private router: Router) 
  {

  }

  submitted = false;

  
  patient = new Patient();
 

  
  

  onSubmit()
  {
    this.submitted=true;
   
    this.save();
  }

  save()
  {
    this.service.createPatient(this.patient).subscribe();
  }
}
