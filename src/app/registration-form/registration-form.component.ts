import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { UserRegistration } from 'src/dtos/user-registration';
import { SharedService } from 'src/services/shared.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
@Input() showPopUp: boolean = false;
signupDetails:UserRegistration = new UserRegistration()
baseURL = "https://localhost:7155";
ngOnInit(){
  this.sharedService.signupPopupAction.subscribe(() => {
    this.showPopUp=!(this.showPopUp);
  });
}
constructor(private http:HttpClient,private sharedService: SharedService) {

}
errorstatus= "";
onSignupSubmission(){
this.http.post(this.baseURL + '/api/User/UserRegistration', this.signupDetails).subscribe(
  (response) => {
    console.log(response)
    this.showPopUp = false;
  },

  (error) => {
    console.log(error);
    this.errorstatus = "Registration failed";
  }
)
}

onSignupCancel(){
  this.showPopUp = false;
}
}