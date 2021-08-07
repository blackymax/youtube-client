import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  firstName: string = '';

  lastName: string = '';

  mail: string = '';

  password: string = '';

  setCredentials() {
    localStorage.setItem('fName', this.firstName);
    localStorage.setItem('lName', this.lastName);
    localStorage.setItem('mail', this.mail);
    localStorage.setItem('password', this.password);
  }
}
