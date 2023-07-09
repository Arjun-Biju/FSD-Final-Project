import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SharedService } from 'src/services/shared.service';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showFiller = false;
  @Output() showPopupChange = new EventEmitter<boolean>();

  constructor(private userservice:UserServiceService, private http:HttpClient, private sharedService: SharedService) {
    
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
  blogs = [
    {
      img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5CFC8u8XiXcbSOlVv6JZQx/4e6f898f57f9d798437b3aa22026e30b/CourseraLearners_C_Composition_Hillary_copy__3_.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40",
      title: 'Learn without limits',
      content: 'Start, switch, or advance your career with more than 5,800 courses, Professional Certificates, and degrees from world-class universities and companies.'
    },
    {
      img:"https://cdn.wallpapersafari.com/59/64/Fh8w39.jpg",
      title: 'Blog Post 2',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nulla a doloribus sequi ex saepe modi quidem, veritatis laudantium placeat cum quia maxime iusto quisquam! Quasi id illo vero iure minima molestiae quae, nihil maxime voluptatum amet asperiores excepturi molestias impedit quas veritatis accusantium aut quis, numquam vel cumque! Tempore.'
    },
    {
      img:"https://www.wallpaperflare.com/static/785/353/150/notebook-laptop-computer-keyboard-wallpaper.jpg",
      title: 'Blog Post 3',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nulla a doloribus sequi ex saepe modi quidem, veritatis laudantium placeat cum quia maxime iusto quisquam! Quasi id illo vero iure minima molestiae quae, nihil maxime voluptatum amet asperiores excepturi molestias impedit quas veritatis accusantium aut quis, numquam vel cumque! Tempore.'
    }
  ];

  slideIndex = 0;
  
  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.blogs.length;
  }
  
  previousSlide() {
    this.slideIndex = (this.slideIndex - 1 + this.blogs.length) % this.blogs.length;
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

  showPopUp: boolean = false;

  openRegistration() {
    this.sharedService.signupPopupAction.emit();
  }
}