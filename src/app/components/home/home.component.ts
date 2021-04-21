import { Component, OnInit,Input } from '@angular/core';
import { UaeService } from '../../service/uae.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() Hospitals:any;
  constructor(private uaeService: UaeService) { 
    this.Hospitals = this.uaeService.getUaeData();
  }

  ngOnInit(): void {
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
