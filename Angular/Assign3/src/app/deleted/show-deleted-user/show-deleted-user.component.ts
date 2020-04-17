import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-deleted-user',
  templateUrl: './show-deleted-user.component.html',
  styleUrls: ['./show-deleted-user.component.css']
})
export class ShowDeletedUserComponent implements OnInit {

  public users;
  public isDeactivate = "true";
  constructor() { }

  ngOnInit(): void {
  }

}
