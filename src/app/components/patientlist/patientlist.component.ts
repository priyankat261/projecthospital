import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PatientserviceService } from '../../Services/patientservice.service';
import { Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { Patient } from '../../models/Patient';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrl: './patientlist.component.css'
})
export class PatientlistComponent {

  public patient: Observable<Patient[]> = of([]);

  constructor(private service: PatientserviceService,
    private router: Router) {

  }

  patientDetails(id: number) {
    this.router.navigate(['details', id]);
  }
  

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.patient = this.service.getAllPatient();

  }

  deletePatient(id:number)
    {
      return this.service.deletePatient(id).subscribe((data)=>{
        console.log(data);
        this.getAll();
      })
}
}
