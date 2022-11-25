import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/_services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: any;

  constructor(private videoService: VideosService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.videoService.getVideos().subscribe(response => {
      console.log(response);
      this.videos = response;
    })
  }

}
