import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {
  @Input() toggleNav = false;
  constructor() { }

  ngOnInit(): void {
  }

  showToggleNav(event:any) {
    this.toggleNav = !this.toggleNav
  }

}
