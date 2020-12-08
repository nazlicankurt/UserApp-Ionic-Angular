import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { webSocket } from "rxjs/webSocket";
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.page.html',
  styleUrls: ['./main-content.page.scss'],
})
export class MainContentPage implements OnInit {
  users: User[];
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.users = this.userService.getAll();
  }

  goToUserDetailPage(user): void {
    this.router.navigate(['./user-detail'], { relativeTo: this.route, queryParams: { user: JSON.stringify(user) } });
  }
}
