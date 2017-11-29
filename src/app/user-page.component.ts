import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

 user: String;
  password: String;
  email:String;

  constructor(private router: Router, private route: ActivatedRoute) { }

  navigateTo() {
    this.router.navigate(['/header'], { queryParams: { title: 'Hello' }});
  }

  ngOnInit() {
    this.user = this.route.snapshot.queryParams['user'];
    this.password = this.route.snapshot.queryParams['password'];
    this.email=this.route.snapshot.queryParams['email'];
    console.log(this.route.snapshot.queryParams);
  }
}
