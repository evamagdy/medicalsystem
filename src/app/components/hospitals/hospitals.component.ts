import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Uae } from 'src/app/service/uae';
import { UaeService } from '../../service/uae.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css'],


})
export class HospitalsComponent implements OnInit {
  UAE: Uae[];
  City: Uae[];
  UAES: [];
  uaeSelected: any;
  // hospitals_clinics: any;
  hospitals: any;
  /* pagination */
  hospitals_clinics: Uae[] = [];
  currentTutorial?: Uae;
  currentIndex = -1;
  title = '';
  CityBanner: string = "../../../../assets/images/MainBanner.jpg";
  page = 1;
  count = 0;
  pageSize = 5;
  pageSizes = [5, 10, 15];
  constructor(private uaeService: UaeService, private router: Router) {

  }

  ngOnInit(): void {

    this.getHospitals();
    this.uaeService.getUaeData().subscribe(res => {
      this.UAES = res.uae;
      this.City = res.uae;
      console.log("jjjjjjjjj" + res)
      console.log("UAEEEE" + JSON.stringify(this.UAE))

    })

  }
  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }
  getHospitals() {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);
    this.uaeService.getHospitalsData().subscribe(res => {
      const { hospitals_clinics, totalItems } = res;
      this.hospitals_clinics = hospitals_clinics;
      this.count = totalItems;
      console.log(res);
      this.hospitals_clinics = res.result.flat();
      console.log(this.hospitals)

    })
  }

  handlePageChange(event: number): void {
    this.page = event;
    // this.getHospitals();

  }

  // handlePageSizeChange(event: any): void {
  //   this.pageSize = event.target.value;
  //   this.page = 1;
  //   this.getHospitals();
  // }


  onUAESelected(SelectedUAEName: any): void {
   this.page=1
    if (SelectedUAEName == "")
      this.UAE = this.City
    else {
      this.UAE = this.City.filter((c => c.name == SelectedUAEName.target.value));
      this.CityBanner = this.City.filter(c => c.name == SelectedUAEName.target.value)[0].image
    }
    console.log("data" + this.UAE)
    this.hospitals = this.UAE.map(o => o.hospitals_clinics);
    this.hospitals_clinics = this.hospitals.flat();
    console.log(this.hospitals)
    console.log(this.hospitals.flat())
  }

  HospitalDetails(hospitalId) {
    this.router.navigate(['hospital-details/', hospitalId])
  }


}


