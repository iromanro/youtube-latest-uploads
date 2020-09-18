import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-video',
  templateUrl: './featured-video.component.html',
  styleUrls: ['./featured-video.component.scss']
})
export class FeaturedVideoComponent implements OnInit {
  @Input() featuredVideo: object;
  @Input() isLoading: object;

  constructor() { }

  ngOnInit(): void {}
}
