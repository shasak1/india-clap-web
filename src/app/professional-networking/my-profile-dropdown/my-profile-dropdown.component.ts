import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-my-profile-dropdown',
  templateUrl: './my-profile-dropdown.component.html',
  styleUrls: ['./my-profile-dropdown.component.css']
})
export class MyProfileDropdownComponent implements OnInit {

  constructor( private auth: AuthService ) { }

  ngOnInit() {
  }

}
