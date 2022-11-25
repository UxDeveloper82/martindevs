import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  myInterval = 1500;
  activeSlideIndex = 0;
  slides: { image: string; text?: string} [] = [
    {image: '/assets/footer/footer.jpg'},
    {image: '/assets/footer/footer-Web-Design.jpg'},
    {image: '/assets/footer/footer-design.jpeg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth'})

  }

}
