import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  email = 'peter@klaven';
  password = 'cityslicka';

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) {
  }

  tryLogin() {
    this.api.login(
      this.email,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
            this.router.navigateByUrl('/users');
          }
        },
        r => {
          alert(r.error.error);
        });
  }

}