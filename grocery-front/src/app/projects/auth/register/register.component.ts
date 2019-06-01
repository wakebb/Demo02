import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/services/auth.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isAddedSuccess: boolean


  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {

  }

  registerAdmin(user) {
    this.authService.registerAdmin(user)
      .subscribe((res) => {
        if (res.success) {
          this.isAddedSuccess = true;
        }
      });
  }
}
