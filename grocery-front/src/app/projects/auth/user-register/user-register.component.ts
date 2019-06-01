import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../modules/services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor (private authService: AuthService,
               private router: Router){ }

  ngOnInit() {
  }

  register(user) {
    this.authService.register(user)
      .subscribe((res) => {
        if (res.success) {
          this.router.navigate(['/login']);
        }
      });

  }

}
