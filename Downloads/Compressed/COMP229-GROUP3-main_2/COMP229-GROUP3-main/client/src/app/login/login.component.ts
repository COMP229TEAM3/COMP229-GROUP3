import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
  <form action="" method="POST" autocomplete="off">
                <fieldset class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" class="form-control"
                    name="username" placeholder="Enter username"
                    id="username" required autofocus>
                </fieldset>
 
                <fieldset class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control"
                    name="password" placeholder="Enter password"
                    id="password" required >
                    or Don't have an account? 
                    <a href="/register">Register Here</a>
                </fieldset>

                <fieldset class="form-group text-right">
                    <input type="submit" class="btn btn-success" value="Login">
                    <a href="/" >
                        <input type="button" class="btn btn-warning" value="Cancel">
                    </a>
                   
                </fieldset>
            </form>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
