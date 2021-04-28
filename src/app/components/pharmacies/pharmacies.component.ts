import { Component, OnInit } from '@angular/core';
import { Uae } from 'src/app/service/uae';
import { UaeService } from '../../service/uae.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css']
})
export class PharmaciesComponent implements OnInit {
  UAE: Uae[];
  City: Uae[];
  UAES: [];
  // hospitals_clinics: any;
  pharmacy: any;
  /* pagination */
  pharmacies: Uae[] = [];
  currentIndex = -1;
  CityBanner: string = "../../../../assets/images/MainBanner.jpg";
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];
  constructor(private uaeService: UaeService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getPharmacies();
    this.spinner.show();
    this.uaeService.getUaeData().subscribe(res => {

      this.City = res.uae;
      this.UAES = res.uae;
      console.log(res.uae)
      this.spinner.hide();

    })
  }
  getPharmacies() {
    this.spinner.show();
    this.uaeService.getPharmacyeData().subscribe(res => {
      const { pharmacies, totalItems } = res;
      this.pharmacies = pharmacies;
      this.count = totalItems;
      this.spinner.hide();
      console.log(pharmacies);
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
    this.pharmacy = this.UAE.map(o => o.pharmacies);
    this.pharmacies = this.pharmacy.flat();
    console.log(this.pharmacy)
    console.log(this.pharmacy.flat())
  }
  PharmacyDetails(pharmacyId) {
    this.router.navigate(['pharmacy-details/', pharmacyId])
  }
}
