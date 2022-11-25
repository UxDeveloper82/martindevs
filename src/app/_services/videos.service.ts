import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private API_URL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCymPTmdV5goU-IBMCAPaErQ&maxResults=57&order=date&key=AIzaSyAtBJJ-bZknixTcKVGcdthrQwc0XhjSuhg';

  constructor(private http: HttpClient) { }

  getVideos(): Observable<any> {
    const url = this.API_URL;
     return this.http.get(url)
        .pipe(
          map((response: any) => response.items));
  }
}
