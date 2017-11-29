import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
title: String;

  constructor(private route: ActivatedRoute, private router: Router) { }

  navigateTo() {
    this.router.navigate(['/userPage'], { queryParams: { user: 'abcd', password: '1234' }});
  }

  ngOnInit() {
    this.title = this.route.snapshot.queryParams['title'];
    console.log(this.route.snapshot.queryParams);
  }
}
