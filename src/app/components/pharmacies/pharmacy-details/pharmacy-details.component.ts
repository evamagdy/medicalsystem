import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UaeService } from '../../../service/uae.service';
@Component({
  selector: 'app-pharmacy-details',
  templateUrl: './pharmacy-details.component.html',
  styleUrls: ['./pharmacy-details.component.css']
})
export class PharmacyDetailsComponent implements OnInit {
  pharmacyId: number;
  PharmacyDetails:any;
  constructor(private activatedRoute: ActivatedRoute, private uaeService: UaeService) {
    this.pharmacyId = this.activatedRoute.snapshot.params["pharmacyId"];
    this.getPharmacyDetails(this.pharmacyId);
   }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  getPharmacyDetails(pharmacyId) {
    this.uaeService.getPharmacyDetails(pharmacyId).subscribe(res => {
      this.PharmacyDetails=res;

      console.log(this.PharmacyDetails.pharmacies.timings)
    })
  }
}
