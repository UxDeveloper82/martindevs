import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrls: ['./sidebar-page.component.scss']
})
export class SidebarPageComponent implements OnInit {
  @Input() toggleNav = false;

  constructor() { }

  ngOnInit(): void {
  }




}
