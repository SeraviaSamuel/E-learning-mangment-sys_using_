import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RegisterService} from '../services/account/register.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; // Import NgForm


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    userData: any = {
    userName: '',
    password: '',
    email: '',
    accountType:'User'
  };
  errorMessage: boolean =false;
  constructor(private registerService:RegisterService,private router: Router){

  }
  onSubmit(form: NgForm) {
    this.registerService.postData(this.userData).subscribe({
      next: (response: any) => {
        this.router.navigateByUrl('/login');
      },
      error: (err: any) => {
        if (err.status === 400) {
          this.errorMessage = true;
          form.reset(); 
        }
      }
    });
  }
}
