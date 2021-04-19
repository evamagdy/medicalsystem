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

}
