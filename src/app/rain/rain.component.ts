import { Component, OnInit, ViewContainerRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.scss']
})
export class RainComponent implements OnInit {
  rainElements: Array<Element>;
  increment: number = 0;
  drops: Element[] = null;
  backDrops: string = null;
  route: ActivatedRoute;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.rainElements = Array.from(document.getElementsByClassName("rain"));
    this.rainElements.forEach((element) => {
      element.innerHTML = '';     
    });
    
    while (this.increment < 100) {
      //couple random numbers to use for various randomizations
      var randoHundo = (Math.floor(Math.random() * (95 - 1 + 1) + 1));
      var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      //increment
      this.increment += randoFiver;
      var frontDrop = `<diV class="drop" style="left: ${this.increment}%;
      bottom: ${(randoFiver + randoFiver - 1 + 95)}%;
      position: fixed;
      z-index: 2;
      width: 15px;
      pointer-events: none;
      animation: rainDrop 0.5${randoHundo}s linear 0.${randoHundo}s infinite;">
      <div class="stem" style="width: 2px;
      height: 25px;
      margin-left: 7px;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75));
      animation: stem 0.5${randoHundo}s linear 0.${randoHundo}s infinite;"></div>
      <div class="splat" style="width: 30px;
      height: 30px;
      border-top: 5px dotted rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      opacity: 1;
      transform: scale(0);
      animation: splat 0.5${randoHundo}s linear 0.${randoHundo}s infinite;">
      </div></div>`;
      var backDrop = `<diV class="drop" style="right: ${this.increment}%;
      bottom: ${(randoFiver + randoFiver - 1 + 105)}%;
      position: fixed;  
      width: 15px;
      z-index: 1;
      pointer-events: none;
      animation: rainDrop 0.5${randoHundo}s linear 0.${randoHundo}s infinite;">
      <div class="stem" style="width: 2px;
      height: 25px;
      margin-left: 7px;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5));
      animation: stem 0.5${randoHundo}s linear 0.${randoHundo}s infinite;"></div>
      <div class="splat" style="width: 30px;
      height: 30px;
      border-top: 5px dotted rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      opacity: 1;
      transform: scale(0);
      animation: splat 0.5${randoHundo}s linear 0.${randoHundo}s infinite;">
      </div></div>`;
      this.rainElements[0].insertAdjacentHTML("afterend", frontDrop);
      this.rainElements[1].insertAdjacentHTML("afterend", backDrop)
    }

  }

}
