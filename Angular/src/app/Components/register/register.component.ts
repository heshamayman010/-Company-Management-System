import { Component } from '@angular/core';
import { DepjobService } from '../Services/depjob.service';
import { IRegister } from '../Models/iregister';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
registerDto: IRegister = {userName:'',email:'',password:'',verifyPassword:''}; // Initialize an object to hold form data
  successMessage: string | null = null;
  errorMessage: string | null = null;
  constructor(private authService: DepjobService, private router: Router) {}

Register(): void {
  this.authService.register(this.registerDto).subscribe(
    (response) => {
      // Handle successful registration response if needed
      this.successMessage = 'Registration successful. Redirecting to main...';
        this.router.navigateByUrl('/main');

    },
    (error) => {
      if (error.status === 400) {
        // Bad request - validation error
        this.errorMessage = error.error.message; // 
      } else {
        // Server error or other error
        this.errorMessage = 'Registration failed. Please try again later.';
      }
    }
  );
}

//  login() {


//     this.authService.login(this.loginData).subscribe(
    
//       (response) => {
//         // Redirect to home page after successful login
//         this.router.navigateByUrl('/main');
//       },
//       (error) => {
//         // Handle login error
//         if (error.status === 400) {
//           // Bad request - authentication error
//           this.errorMessage = error.error.message; // Assuming the API returns error messages in the response body
//         } else {
//           // Server error or other error
//           this.errorMessage = 'Login failed. Please try again later.';
//         }
//       }
//     );
//   }




    redirectToLogin(): void {
    this.router.navigate(['/login']); // Redirect to the login page
  }
}
