import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UaeService } from '../../../service/uae.service';
@Component({
  selector: 'app-hospitals-details',
  templateUrl: './hospitals-details.component.html',
  styleUrls: ['./hospitals-details.component.css']
})
export class HospitalsDetailsComponent implements OnInit {
  hospitalId: number;
  hospitalDeails:any;
  constructor(private activatedRoute: ActivatedRoute, private uaeService: UaeService) {
    this.hospitalId = this.activatedRoute.snapshot.params["hospitalId"];
    this.getHospitalDetails(this.hospitalId);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  getHospitalDetails(hospitalId) {
    this.uaeService.getHospitalsDetails(hospitalId).subscribe(res => {
      this.hospitalDeails=res;

      console.log(this.hospitalDeails.hospitals_clinics.name)
    })
  }
}
