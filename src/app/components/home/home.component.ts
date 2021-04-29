import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { UaeService } from '../../service/uae.service';
import AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() Hospitals: any;
  @ViewChild("oneItem") oneItem: any;
  @ViewChildren("count") count: QueryList<any>;

  constructor(private uaeService: UaeService) {
    this.Hospitals = this.uaeService.getUaeData();
  }


  ngOnInit(): void {
    AOS.init({
      duration: 1000,
    })

  }
  ngAfterViewInit() {
    this.animateCount();
  }

  animateCount() {
    let _this = this;

    let single = this.oneItem.nativeElement.innerHTML;

    this.counterFunc(single, this.oneItem, 7000);

    this.count.forEach(item => {
      _this.counterFunc(item.nativeElement.innerHTML, item, 2000);
    });
  }

  counterFunc(end: number, element: any, duration: number) {
    let range, current: number, step, timer;

    range = end - 0;
    current = 0;
    step = Math.abs(Math.floor(duration / range));

    timer = setInterval(() => {
      current += 1;
      element.nativeElement.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }
  imgCollection: Array<object> = [
    {
      image: '../../../assets/images/AHDcampus.jpg',
      thumbImage: '../../../assets/images/AHDcampus.jpg',
      alt: 'Image 1',
      title: 'American Hospital Dubai'
    }, {
      image: '../../../assets/images/hcpimage-1716.jpg',
      thumbImage: '../../../assets/images/hcpimage-1716.jpg',
      title: 'Fakih IVF Abu Dhabi',
      alt: 'Image 2'
    }, {
      image: '../../../assets/images/untitled-1000x583.png',
      thumbImage: '../../../assets/images/untitled-1000x583.png',
      title: 'Tawam Hospital',
      alt: 'Image 3'
    }, {
      image: '../../../assets/images/2d139ffe1689ba4bc4bff0be6dbcafd7.jpg',
      thumbImage: '../../../assets/images/2d139ffe1689ba4bc4bff0be6dbcafd7.jpg',
      title: 'Cocoona Centre for Aesthetic Transformation',
      alt: 'Image 4'
    }, {
      image: '../../../assets/images/dr-suad-lutfi-clinic.jpg',
      thumbImage: '../../../assets/images/dr-suad-lutfi-clinic.jpg',
      title: 'Dr. Suad Lutfi Dermatology and Laser Clinic',
      alt: 'Image 5'
    }, {
      image: '../../../assets/images/20140331104926_08.png',
      thumbImage: '../../../assets/images/20140331104926_08.png',
      title: 'Julphar Implant & Cosmetic Dental Center',
      alt: 'Image 6'
    }
  ];
}
