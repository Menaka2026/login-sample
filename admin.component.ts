import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users$: Object;
  user$: Object;
  constructor(private authService: AuthService, private router: Router,private data: AuthService,private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.user$ = params.id );
   }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    );
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data 
    );
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}