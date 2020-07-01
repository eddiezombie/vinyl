import { Component, OnInit } from '@angular/core'; 
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { Observable } from 'rxjs'; 



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {

  items: Observable<any[]>;
  constructor(private firestoreService: FirestoreService, firestore: AngularFirestore) {
    //this.items = firestore.collection('vinyl').valueChanges(); 
    this.items = this.firestoreService.getVinyls();
    console.log(this.items); 
  }
  
  ngOnInit() {
     
  }

  searching(vinyl:string){
     
    //console.log(vinyl); 
    //console.log(this.items); 
    //this.items.subscribe(res => console.log(res));
    this.items = this.firestoreService.filterBy(vinyl);
  

    //this.itemss = firestore.collection('vinyl').valueChanges(); 
  }

}
