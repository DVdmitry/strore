import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {saveCar} from "../../../cars/state/cars.actions";
import {Store} from "@ngrx/store";
import {CarResponse} from "../../../cars/state/cars.reducer";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private store: Store<{cars: CarResponse}>
  ) {
    this.productForm = fb.group({
      title: ['', Validators.required],
      quantity: ['', Validators.required]
    })
  }

  ngOnInit(): void { }

  saveCar() {
    this.store.dispatch(saveCar(this.productForm.value))
  }

}
