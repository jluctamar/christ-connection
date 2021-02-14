import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit, OnInit, OnDestroy {
  zoomLink = 'https://us02web.zoom.us/j/2535558117';
  viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true); // third parameter
    console.log('viewportHeight: ', this.viewportHeight);
    console.log('viewportWidth: ', this.viewportWidth);
  }

  scroll = (event: any): void => {
    // Here scroll is a variable holding the anonymous function
    // this allows scroll to be assigned to the event during onInit
    // and removed onDestroy
    // To see what changed:
    const scrollVal = event.srcElement.scrollTop;
    const parentCoords = document.querySelector('.stewards') as HTMLElement; // gets the position of the parent Div

    const firstCard = document.querySelector('.card-one') as HTMLElement;
    const secCard = document.querySelector('.card-two') as HTMLElement;
    const thirdCard = document.querySelector(' .card-three') as HTMLElement;
    const fourthCard = document.querySelector('.card-four') as HTMLElement;

    // LOGS FOR DEBUGGING
    console.group('OffsetTop');
    console.log(
      'Scroll Value(Parent):',
      scrollVal,
      '----',
      parentCoords.offsetTop
    );
    console.log(
      'Scroll Value(1):',
      scrollVal,
      '----',
      firstCard.offsetTop,
      '----',
      firstCard.offsetTop - parentCoords.offsetTop
    );
    console.log(
      'Scroll Value:(2)',
      scrollVal,
      '----',
      secCard.offsetTop,
      '----',
      secCard.offsetTop - parentCoords.offsetTop
    );
    console.log(
      'Scroll Value:(3)',
      scrollVal,
      '----',
      thirdCard.offsetTop,
      '----',
      thirdCard.offsetTop - parentCoords.offsetTop
    );
    console.log(
      'Scroll Value:(4)',
      scrollVal,
      '----',
      fourthCard.offsetTop,
      '----',
      fourthCard.offsetTop - parentCoords.offsetTop
    );
    console.groupEnd();
    console.group('OffsetParent');
    console.log('Scroll Value(1):', scrollVal, '----', firstCard.offsetParent);
    console.log('Scroll Value:(2)', scrollVal, '----', secCard.offsetParent);
    console.log('Scroll Value:(3)', scrollVal, '----', thirdCard.offsetParent);
    console.log('Scroll Value:(4)', scrollVal, '----', fourthCard.offsetParent);
    console.groupEnd();
    console.log('---------------------------------');

    // determines when the about cards will fade in, in relation to cards position on the screen
    if ((scrollVal > (firstCard.offsetTop - parentCoords.offsetTop)) && (scrollVal < (secCard.offsetTop - parentCoords.offsetTop))) {
      firstCard.style.transform = 'translateX(0%)';
      firstCard.style.opacity = '1';
    }
    if ((scrollVal > (secCard.offsetTop - parentCoords.offsetTop)) && (scrollVal < (thirdCard.offsetTop - parentCoords.offsetTop))) {
      secCard.style.transform = 'translateX(0%)';
      secCard.style.opacity = '1';

    }
    if ((scrollVal > (thirdCard.offsetTop - parentCoords.offsetTop)) && (scrollVal < (fourthCard.offsetTop - parentCoords.offsetTop))) {
      thirdCard.style.opacity = '1';
      thirdCard.style.transform = 'translateX(0%)';

    }
    if (scrollVal > (fourthCard.offsetTop - parentCoords.offsetTop)) {
      fourthCard.style.transform = 'translateX(0%)';
      fourthCard.style.opacity = '1';

    }

    // EDGE CASE: When the app is viewed a high height resolution (ie 2000+) but minimal scrolling height (ie 100px) 
    // not all the cards will display
  };

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }
}
