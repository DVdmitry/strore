import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SaveDataInterface} from "../../../../shared/guards/save-data.interface";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, SaveDataInterface {
  userForm: FormGroup
  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required])
    })
  }


  ngOnInit(): void {
    this.userForm.valueChanges.subscribe(data => {
    })
  }

  isDataSaved(): boolean {
    return !this.userForm.dirty
  }

}
