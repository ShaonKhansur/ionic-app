import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { PhotoService } from '../services/photo.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private photoService: PhotoService,
  ) {}

  ngOnInit() {
    this.createForm()

  }

  createForm() {
    this.form = this.fb.group({
      textinput: ['', Validators.required],
      freetext: ['', Validators.required],
      request: ['', Validators.required],
      measurement: ['', Validators.required],
      photo: ['', Validators.required],
      date: ['', Validators.required],
      signature: ['', Validators.required],
      details: ['', Validators.required],
    })
  }

  takePhoto() {
    console.log('clicked');
    this.photoService.addNewToGallery()
  }

  onSubmit() {
    
  }
}
