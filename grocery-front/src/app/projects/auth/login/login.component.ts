import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../modules/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response;

  constructor(public authService: AuthService, // 注入service
              private router: Router) { }

  ngOnInit() {
    this.authService.checklogin()
      .subscribe((res) => {
        this.response = res;
        console.log(res);
        if (res.success) {
          this.router.navigate(['/grocery']);
        }
      });
  }
  login(user) {
    this.authService.login(user)
      .subscribe((res) => {
        this.response = res;
        if (res.success) {
          // this.router.navigate(['/']);
        }
      });
  }

}
