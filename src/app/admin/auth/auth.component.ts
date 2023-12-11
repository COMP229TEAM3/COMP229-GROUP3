import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../model/auth.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  public user!: User;
  public errorMessage: string | undefined;

  constructor(private router: Router,
              private auth: AuthService) {}

  ngOnInit(): void {
    this.user = new User();
    
  }
  authenticate(form: NgForm): void
  {
    if(form.valid)
    {
      
        this.router.navigateByUrl("admin/main");
    } 
      else
      {
        this.errorMessage = 'Form Data Invalid';
      }
    }
  }


