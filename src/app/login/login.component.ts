import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/account/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData: any = {
    userName: '',
    password: ''
  };
  errorMessage: boolean =false;
  constructor(private loginService: LoginService,private router: Router) {}


  onSubmit(form : any){
    this.loginService.postData(this.userData).subscribe({
      next:((response:any)=>{
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('/courses');
      }),
      error:((err:any)=>{
        if (err.status === 401){
          console.log("erorrrrrr")
          this.errorMessage = true;
        }
      })
    })
  }
}
