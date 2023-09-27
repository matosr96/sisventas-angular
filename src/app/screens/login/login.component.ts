import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../../api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  onUserInputChange(newValue: string) {
    this.user = newValue;
  }

  onPasswordInputChange(newValue: string) {
    this.password = newValue;
  }

  onSubmit() {
    const data = {
      usuario: this.user,
      contrasena: this.password,
    };
    this.http.post("https://crazy-test-api-production.up.railway.app/api/v1/signin", data);
  }
}
