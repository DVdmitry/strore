import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.productForm = fb.group({
      title: ['', Validators.required],
      quantity: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    console.log('userComponent')
  }

}
