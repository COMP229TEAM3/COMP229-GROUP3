import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incident-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './incident-add.component.html',
  styleUrl: './incident-add.component.css'
})
export class IncidentAddComponent {

  title:'Add Incident'="Add Incident";

}
