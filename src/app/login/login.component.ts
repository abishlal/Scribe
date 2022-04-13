import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  fname = new FormControl('', [Validators.required]);
  lname = new FormControl('', [Validators.required])
  pass = new FormControl('', [Validators.required, Validators.minLength(8)])
  gender = new FormControl('' ,[Validators.required])
  number = new FormControl('', [Validators.required])

  regForm = new FormGroup({
    fname: this.fname,
    lname: this.lname,
    email: this.email,
    pass: this.pass,
    gender: this.gender
  })
  onsubmit() {

  }

}
