import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Http} from '@angular/http';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.css']
})
export class AddGroceryComponent implements OnInit {

  form: FormGroup;

  flag: boolean

  constructor(private http: Http,
              private fb: FormBuilder) { this.createForm() }

  ngOnInit() {
    this.flag = false
  }

  createForm() {
    this.form = this.fb.group({
      gro_name: ['', Validators.required],
      grocery_image: null,
      gro_desc: [''],
      price: ['']
    });
  }

  private prepareSave(): any{
    let input = new FormData();
    input.append('gro_name', this.form.get('gro_name').value);
    input.append('grocery_image', this.form.get('grocery_image').value)
    input.append('gro_desc', this.form.get('gro_desc').value)
    input.append('price', this.form.get('price').value)
    return input;
  }

   // use form module to send
  addCabinet(){
    const formModule = this.prepareSave();
    console.log(formModule)
    this.http.post('http://localhost:8080' + "/grocery", formModule).subscribe((res) => {
      console.log(res.json());
      if(res.json().success == true){
        this.flag = true;
      }
    })
  }


  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('grocery_image').setValue(file);
    }
  }

}
