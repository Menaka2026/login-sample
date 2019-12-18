import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UsersComponent implements OnInit {

  users$: Object;
  
  constructor(private data: AuthService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    );
  }

}