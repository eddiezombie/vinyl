import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  checkoutForm; 
  idVynil; 

  constructor(private FormBuilder: FormBuilder, private firestoreService: FirestoreService, private route: ActivatedRoute) { 
    this.checkoutForm = this.FormBuilder.group({
      id: '',
      artist: '',
      name: ''
    }); 
  }

  ngOnInit() {
    this.idVynil = this.route.snapshot.paramMap.get("id") 

    let editSubscribe = this.firestoreService.getCat(this.idVynil).subscribe((cat) => {
      this.idVynil = this.idVynil;
      this.checkoutForm.setValue({
        id: this.idVynil,
        artist: cat.payload.data()['artist'],
        name: cat.payload.data()['name']
      });
      editSubscribe.unsubscribe();
    });
  }

  public editVinyl(form) { 
    this.firestoreService.updateCat(form.id, form);
  }

}
