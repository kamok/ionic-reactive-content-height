import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchResults: any;

  constructor(public navCtrl: NavController) {
    this.searchResults = [
      {
        name: "Hi",
        employer_name: "Jesus Inc.",
        union_id: "123456"
      },
      {
        name: "Hi",
        employer_name: "Jesus Inc.",
        union_id: "123456"
      },
      {
        name: "Hi",
        employer_name: "Jesus Inc.",
        union_id: "123456"
      },
      {
        name: "Hi",
        employer_name: "Jesus Inc.",
        union_id: "123456"
      },
      {
        name: "Hi",
        employer_name: "Jesus Inc.",
        union_id: "123456"
      },
      {
        name: "Hi",
        employer_name: "Jesus Inc.",
        union_id: "123456"
      },
      {
        name: "Hi",
        employer_name: "Jesus Inc.",
        union_id: "123456"
      },
      {
        name: "Hi",
        employer_name: "Jesus Inc.",
        union_id: "123456"
      },
      {
        name: "Hi",
        employer_name: "Jesus Inc.",
        union_id: "123456"
      },
      {
        name: "Hi",
        employer_name: "Jesus Inc.",
        union_id: "123456"
      }
    ]
  }

}
