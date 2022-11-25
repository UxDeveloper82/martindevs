import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../_models/video';


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Input() videos: Video[];

  constructor() { }

  ngOnInit(): void {
  }

}
