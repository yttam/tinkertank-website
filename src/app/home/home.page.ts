import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import testimonialData from './testimonials.data.json'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  testimonials: any = testimonialData.testimonials
  imgLogoSrc: string = "/assets/images/logo-black.png"
  whiteLogoSrc: string = "/assets/images/white-logo-thin.png"
  hero: string = "https://tv-develop-output-fxgjjx78.s3.ap-southeast-2.amazonaws.com/why-video-hero.jpg"
  _videoPlayer: any
  url: string = "https://tv-develop-output-fxgjjx78.s3.ap-southeast-2.amazonaws.com/TTloop_v1_1080p/TTloop_v1_1080p.m3u8"
  slideOpts: any = {
    initialSlide: 0,
    speed: 400,
    rebuildOnUpdate: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
      1800: {
        slidesPerView: 4,
      }
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      this.imgLogoSrc = "/assets/images/logo-white.png"
  }

  showIntercom() {
    console.log("reached showIntercom")
  }

  enrollNow() {
    this.router.navigate(['/offers-list']);
  }
  home() {
    this.router.navigate(['/']);
  }
  whyPage() {
    this.router.navigate(['/why']);
  }
  whatPage() {
    this.router.navigate(['/what']);
  }
  locationPage() {
    this.router.navigate(['/location']);
  }

  async ngAfterViewInit() {
    console.log("reached ngAfterViewInit")
  }

  async playVideo() {
    console.log("reached playVideo")
  }


  segmentChanged(event: any) {
    const tabName = event.detail.value;
    const routePath = '/' + tabName; // Assuming your routes are defined like this
    this.router.navigate([routePath]);
  }

}
