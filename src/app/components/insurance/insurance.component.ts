import { Component, OnInit } from '@angular/core';
import { Uae } from 'src/app/service/uae';
import { UaeService } from '../../service/uae.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  UAE: Uae[];
  City: Uae[];
  UAES: [];
  // hospitals_clinics: any;
  insurance: any;
  /* pagination */
  insurance_companies: Uae[] = [];
  currentIndex = -1;
  CityBanner: string = "../../../../assets/images/MainBanner.jpg";
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];
  constructor(private uaeService: UaeService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getInsuranceCompanies();
    this.spinner.show();
    this.uaeService.getUaeData().subscribe(res => {

      this.City = res.uae;
      this.UAES = res.uae;
      console.log(res.uae)
      this.spinner.hide();

    })
  }
  getInsuranceCompanies() {
    this.spinner.show();
    this.uaeService.getInsuranceData().subscribe(res => {
      const { insurance_companies, totalItems } = res;
      this.insurance_companies = insurance_companies;
      this.count = totalItems;
      this.spinner.hide();
      console.log(insurance_companies);
      // this.insurance_companies = res.result.flat();

    })
  }
  handlePageChange(event: number): void {
    this.page = event;
    // this.getHospitals();

  }
  onUAESelected(SelectedUAEName: any): void {
    this.page = 1
    if (SelectedUAEName == "")
      this.UAE = this.City
    else {
      this.UAE = this.City.filter((c => c.name == SelectedUAEName.target.value));
      this.CityBanner = this.City.filter(c => c.name == SelectedUAEName.target.value)[0].image
    }
    console.log("data" + this.UAE)
    this.insurance = this.UAE.map(o => o.insurance_companies);
    this.insurance_companies = this.insurance.flat();
    console.log(this.insurance)
    console.log(this.insurance.flat())
  }

  InsuranceDetails(insuranceId) {
    this.router.navigate(['insurance-details/', insuranceId])
  }

}
