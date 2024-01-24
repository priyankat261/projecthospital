import { Component } from '@angular/core';
import { Patient } from '../../models/Patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientserviceService } from '../../Services/patientservice.service';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrl: './patientdetails.component.css'
})
export class PatientdetailsComponent {

  patId: number=0;
  patient: Patient=new Patient();

  constructor(private route: ActivatedRoute,private router: Router,
    private service: PatientserviceService) { }

    ngOnInit() {
      this.patient = new Patient();
  
      this. patId = this.route.snapshot.params['patId'];

      

      this.service.getonePatient(this.patId).subscribe((data: Patient)=>{
        console.log(data);
        this.patient=data;
      })


}

list(){
  this.router.navigate(['list']);
}
}



