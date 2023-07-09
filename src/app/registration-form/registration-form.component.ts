import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserRegistration } from 'src/dtos/user-registration';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
showPopUp: boolean = false;
signupDetails:UserRegistration = new UserRegistration()
baseURL = "https://localhost:7155"
constructor(private http:HttpClient) {

}
onSignupSubmission(){
this.http.post(this.baseURL + '/api/User/UserRegistration', this.signupDetails).subscribe(
  (response) => {
    console.log(response)
  },

  (error) => {
    console.log(error)
  }
)
}
}