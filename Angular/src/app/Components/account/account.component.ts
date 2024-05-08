import { Component } from '@angular/core';
import { ILogin } from '../Models/ilogin';
import { DepjobService } from '../Services/depjob.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  
loginData: ILogin = { email: '', password: '' };
  errorMessage: string | null = null;

  constructor(private authService: DepjobService, private router: Router) { }

 login() {


    this.authService.login(this.loginData).subscribe(
    
      (response) => {
        // Redirect to home page after successful login
        this.router.navigateByUrl('/main');
      },
      (error) => {
        // Handle login error
        if (error.status === 400) {
          // Bad request - authentication error
          this.errorMessage = error.error.message; // Assuming the API returns error messages in the response body
        } else {
          // Server error or other error
          this.errorMessage = 'Login failed. Please try again later.';
        }
      }
    );
  }

  redirectToRegister(){

    this.router.navigate(['/Register'])
  }
}


  // // here we must use the interceptors for tokens 

//   return this.authService.login(this.loginData).subscribe((res:any)=>{


// console.log('result',res);
// localStorage.setItem('token',res.token)
// this.router.navigateByUrl('/main');

//   })

