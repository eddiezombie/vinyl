import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  checkoutForm; 

  constructor(private FormBuilder: FormBuilder, private firestore: AngularFirestore) {

    this.checkoutForm = this.FormBuilder.group({
      artist: '',
      name: ''
    }); 

   }  
    

  public newVinyl(form) {
    console.log(form);

    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("vinyl")
          .add(form)
          .then(res => {}, err => reject(err));
    });
  }

  ngOnInit() {
  }

}
