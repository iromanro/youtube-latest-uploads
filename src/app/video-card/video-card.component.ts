import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})

export class VideoCardComponent implements OnInit {
  @Input() video: object;
  @Input() isLoading: boolean;
  @Input() offset: number;
  ratio: number = 0;
  
  constructor() {
    this.ratio = 0.01 + (Math.floor(Math.random() * (99 - 2 + 1) + 2)) / 100;
   }

  ngOnInit(): void {
    
  }
}
