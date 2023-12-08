import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressService } from '../express.service';
import { IncidentComponent } from '../incident/incident.component';
import { Incident } from '../incident';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [CommonModule, IncidentComponent, RouterModule],
  template: `
  <div class="row">
      <div class="offset-md-offset-3 col-md-12">
          <style>
              body {
                background-image: url('assets/images/incident2.png');
                background-size: cover;
              }                    
            </style>
          <br>
        <div class="text-center">
          <a [routerLink]="['/data/add']" class="btn btn-primary" role="button">
              <i class="fas fa-plus-circle">Add Survey
        
          <br>
          <table class="table table-bordered table-striped table-hover">
             <!-- Header Row -->
              <tr class="d-flex">
                  <th class="text-center col-3">Incident</th>
                  <th class="text-center col-2">Description</th>
                  <th class="text-center col-3">Date</th>                           
                  <th class="text-center col-2"></th>
                   <th class="text-center col-2"></th>
              </tr>

              <!-- Repeatable Template Row -->
              <app-incident
              *ngFor="let incident of incidentList"
              [incident]="incident">
              </app-incident>
          </table>
      
  
  `,
  styleUrl: './incident-list.component.css'
})
export class IncidentListComponent {
  incidentList: Incident[] = [];
  expressService: ExpressService = inject(ExpressService);

  constructor() {
    this.expressService.getAllIncident().then(incidentList => {
      this.incidentList = incidentList;
      console.log(this.incidentList);
    });
  }
}
