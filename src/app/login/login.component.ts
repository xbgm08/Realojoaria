import { Component } from '@angular/core';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: Login = {
    username: '',
    password: ''
  };

  onSubmit() {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Dados de login:', this.login);
  }

}
