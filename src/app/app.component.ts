import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title: string = 'rainych';
  apiEndpoint: string = `https://content.googleapis.com/youtube/v3/playlistItems?maxResults=11&part=contentDetails%2Cid%2Csnippet&playlistId=UUrrfJ_8kX6YyXE7F3pDJzEw&key=${process.env.VUE_APP_KEYs}`;
  videos: any = [];
  featuredVideo: any = {};
  safeSrc: SafeResourceUrl;
  isLoading: boolean = true;

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer){}

  ngOnInit(){
    this.fetchData();
  }

  private fetchData(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const promise = this.httpClient.get(this.apiEndpoint, { headers: headers} ).toPromise();
    promise.then((data)=>{
      this.isLoading = false;
      data['items'].forEach((video, index) => {
        var videoInfo = {
          date: video.contentDetails.videoPublishedAt,
          thumbnail: video.snippet.thumbnails.maxres,
          video: `https://www.youtube.com/watch?v=${video.contentDetails.videoId}`,
          title: video.snippet.title,
          spotify: video.snippet.description.toString().match(/(Spotify : )(.*)/g),
          itunes: video.snippet.description.toString().match(/(iTunes : )(.*)/g),
          youtube: video.snippet.description.toString().match(/(YouTube Music : )(.*)/g),
          deezer: video.snippet.description.toString().match(/(Deezer : )(.*)/g),
          amazon: video.snippet.description.toString().match(/(Amazon : )(.*)/g),
        }

        if (index == 0) {
          this.featuredVideo = videoInfo;
        } else {
          this.videos.push(videoInfo)
        }
      });
    }).catch((error)=>{
      this.isLoading = false;
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }
}
