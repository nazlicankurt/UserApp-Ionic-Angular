import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  user: User;
  location: Location;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(param => {
      this.user = JSON.parse(param.get('user'));
    });
  }
}

