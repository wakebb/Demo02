import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../modules/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor( private authService: AuthService,
               private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout()
      .subscribe(res => {
        if(res.success){
          this.router.navigate(['/login']);
        }
      });
  }

}
