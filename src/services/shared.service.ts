import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  sharedData : boolean = false;
  public signupPopupAction : EventEmitter<void> = new EventEmitter<void>();
}
