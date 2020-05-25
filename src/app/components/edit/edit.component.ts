import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
