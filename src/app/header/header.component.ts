import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showFiller = false;
  constructor(private userservice:UserServiceService, private http:HttpClient) {
    
  }
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  sidenavOpened = false;
  username = "";
  fullname = "";
  password = "";
  status = "";
  showLogin = false;
  baseURL = "https://localhost:7155"
  onSubmit(){
  
    let jsonData = {"userEmail":this.username, "password":this.password}
    
      this.http.post(this.baseURL + '/api/User/Login', jsonData).subscribe(
        (response) => {
          console.log(response)
          if(parseInt(JSON.parse(JSON.stringify(response)).id) > 0){
            this.fullname=JSON.parse(JSON.stringify(response)).userName;
            this.showLogin=true;
            this.status = "";
            this.onSuccessfulLogin();
          }
        },

        (error) => {
          console.log(error)
          this.status = "Incorrect Login"
          this.showLogin=false;
        }
      )
  }
  slides = [
    {
      heading: 'Slide 1 Heading',
      body: 'Slide 1 Body Text jsndfnajsdnfnanfkansdkfnkansdlknfknsadnfnsknsn asdcu sadcusnduhc sjsndfnajsdnfnanfkansdkfnkansdlknfknsadnfnsknsn asdcu sadcusnduhc s du s dcj sjd jc sj dcjsndjnansdfs dfu asud fu hasd u du s dcj sjd jc sj dcjsndjnansdfs dfu asud fu hasd u',
      image: 'https://th.bing.com/th/id/R.1408630721912cdd175fff405367fea7?rik=EnD0qABGQKsjgA&riu=http%3a%2f%2fwww.study2apply.com%2fwp-content%2fuploads%2f2015%2f10%2fCourses.jpg&ehk=z97SjO%2fwCN8Nxg%2fyIn7JPSFZ0fstCD1HBgWfo2sKKxc%3d&risl=&pid=ImgRaw&r=0',
      link: 'https://example.com'
    },
    {
      heading: 'Slide 2 Heading',
      body: 'Slide 2 Body Text jsndfnajsdnfnanfkansdkfnkansdlknfknsadnfnsknsn asdcu sadcusnduhc s du s dcj sjd jc sj dcjsndfnajsdnfnanfkansdkfnkansdlknfknsadnfnsknsn asdcu sadcusnduhc s du s dcj sjd jc sj dcjsndjnansdfs dfu asud fu hasd ujsndjnansdfs dfu asud fu hasd u',
      image: 'https://th.bing.com/th/id/OIP.JA4dLtNRo7CYUf3fp2ec2AHaE8?pid=ImgDet&rs=1',
      link: 'https://example.com'
    },
    {
      heading: 'Slide 3 Heading',
      body: 'Slide 3 Body Text jsndfnajsdnfnanfkansdkfnkansdlknfknsadnfnsknsn asdcu sadcusnduhc s du s dcj sjd jc sj dcjsndjnansdfs dfu jsndfnajsdnfnanfkansdkfnkansdlknfknsadnfnsknsn asdcu sadcusnduhc s du s dcj sjd jc sj dcjsndjnansdfs dfu asud fu hasd uasud fu hasd u',
      image: 'https://th.bing.com/th/id/OIP.JA4dLtNRo7CYUf3fp2ec2AHaE8?pid=ImgDet&rs=1',
      link: 'https://example.com'
    }
  ];
  slideIndex = 0;
  
  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
  }
  
  previousSlide() {
    this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
  showPopup: boolean = false;
  openPopup() {
    this.showPopup = !(this.showPopup);
  }
  onSuccessfulLogin(){
    this.showPopup = false;
  }
}