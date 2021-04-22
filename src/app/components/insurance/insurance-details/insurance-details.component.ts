import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UaeService } from '../../../service/uae.service';
@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.css']
})
export class InsuranceDetailsComponent implements OnInit {
  insuranceId: number;
  InsuranceDetails:any;
  constructor(private activatedRoute: ActivatedRoute, private uaeService: UaeService) {
    this.insuranceId = this.activatedRoute.snapshot.params["insuranceId"];
    this.getinsuranceDetails(this.insuranceId);
   }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  getinsuranceDetails(insuranceId) {
    this.uaeService.getInsuranceDetails(insuranceId).subscribe(res => {
      this.InsuranceDetails=res;

      console.log(this.InsuranceDetails.insurance_companies.name)
    })
  }
}
