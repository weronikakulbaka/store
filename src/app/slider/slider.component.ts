import {
  Component,
  OnInit
} from '@angular/core';
import {
  IImage
} from 'ng-simple-slideshow';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  imageUrls: (string | IImage)[] = [{
      url: 'https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg',
      caption: 'Nowa kolekcja mebli kuchennych 2019',
      href: '#config'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2016/06/25/09/04/simpolo-1478500_1280.jpg',
      caption: 'Zobacz propozycje do jadalni',
      href: 'https://www.apple.com/'
    },
    {
      url: 'assets/example.jpg',
      caption: 'Jesienne wyprzedaże sof i kanap'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg',
      caption: 'Urządź z nami salon marzeń',
      clickAction: () => alert('custom click function')
    }
  ];
  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = true;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;
  enableZoom: boolean = false;
  enablePan: boolean = false;
  constructor() {}

  ngOnInit() {}

}
