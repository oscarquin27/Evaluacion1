import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Practica';
  persona: any[] = [
    {
      "_id": "5ed56b36969532178dcc7446",
      "balance": "$2,966.51",
      "picture": "https://source.unsplash.com/random/400x300",
      "age": 22,
      "eyeColor": "green",
      "name": {
        "first": "Eddie",
        "last": "Dickerson"
      },
      "company": "DOGTOWN",
      "email": "eddie.dickerson@dogtown.biz",
      "phone": "+1 (985) 501-2126",
      "address": "344 Commercial Street, Tryon, New York, 6830"
    },
    {
      "_id": "5ed56b36788a97577bb4960b",
      "balance": "$2,467.65",
      "picture": "https://source.unsplash.com/random/400x300",
      "age": 26,
      "eyeColor": "blue",
      "name": {
        "first": "Fitzpatrick",
        "last": "Larsen"
      },
      "company": "BULLZONE",
      "email": "fitzpatrick.larsen@bullzone.org",
      "phone": "+1 (923) 529-3172",
      "address": "375 Poly Place, Dupuyer, Louisiana, 203"
    },
    {
      "_id": "5ed56b36dc998d7f3b29817a",
      "balance": "$2,851.75",
      "picture": "https://source.unsplash.com/random/400x300",
      "age": 26,
      "eyeColor": "green",
      "name": {
        "first": "Ayala",
        "last": "Ruiz"
      },
      "company": "CENTREXIN",
      "email": "ayala.ruiz@centrexin.us",
      "phone": "+1 (930) 572-3540",
      "address": "755 Cranberry Street, Lemoyne, Montana, 7837"
    },
    {
      "_id": "5ed56b364276e6067083c09d",
      "balance": "$2,715.70",
      "picture": "https://source.unsplash.com/random/400x300",
      "age": 20,
      "eyeColor": "blue",
      "name": {
        "first": "Nichols",
        "last": "Hays"
      },
      "company": "PORTALIS",
      "email": "nichols.hays@portalis.me",
      "phone": "+1 (811) 507-3948",
      "address": "873 Prospect Place, Goochland, Maine, 5039"
    },
    {
      "_id": "5ed56b36832143f15046ced2",
      "balance": "$1,999.70",
      "picture": "https://source.unsplash.com/random/400x300",
      "age": 34,
      "eyeColor": "brown",
      "name": {
        "first": "Lester",
        "last": "Stewart"
      },
      "company": "BUZZNESS",
      "email": "lester.stewart@buzzness.net",
      "phone": "+1 (869) 560-2838",
      "address": "739 Malta Street, Yonah, Rhode Island, 5681"
    },
    {
      "_id": "5ed56b3614ccfedb2f64c690",
      "balance": "$2,888.51",
      "picture": "https://source.unsplash.com/random/400x300",
      "age": 22,
      "eyeColor": "green",
      "name": {
        "first": "Janet",
        "last": "Hancock"
      },
      "company": "SENMEI",
      "email": "janet.hancock@senmei.name",
      "phone": "+1 (845) 537-3426",
      "address": "878 Jamison Lane, Ripley, Mississippi, 9686"
    },
    {
      "_id": "5ed56b360808244bb47caa5c",
      "balance": "$3,108.15",
      "picture": "https://source.unsplash.com/random/400x300",
      "age": 29,
      "eyeColor": "green",
      "name": {
        "first": "Clements",
        "last": "Johnston"
      },
      "company": "RAMEON",
      "email": "clements.johnston@rameon.info",
      "phone": "+1 (885) 410-3373",
      "address": "588 Suydam Place, Fulford, Connecticut, 2139"
    },
    {
      "_id": "5ed56b360a590c472734019d",
      "balance": "$3,937.51",
      "picture": "https://source.unsplash.com/random/400x300",
      "age": 20,
      "eyeColor": "green",
      "name": {
        "first": "Audra",
        "last": "Ortega"
      },
      "company": "GEOFORMA",
      "email": "audra.ortega@geoforma.biz",
      "phone": "+1 (921) 440-2077",
      "address": "388 Albemarle Terrace, Abiquiu, Northern Mariana Islands, 7430"
    }
  ]

  contador : number = 0;

  ngOnInit(){
   
  }

  insertarPersona(){
    if(this.contador < 1)
    {
      this.persona.push({
        "_id": "5ed56b360a590c472734019d",
        "balance": "$3,937.51",
        "picture": "https://source.unsplash.com/random/400x300",
        "age": 20,
        "eyeColor": "green",
        "name": {
          "first": "Audra",
          "last": "Ortega"
        },
        "company": "GEOFORMA",
        "email": "audra.ortega@geoforma.biz",
        "phone": "+1 (921) 440-2077",
        "address": "388 Albemarle Terrace, Abiquiu, Northern Mariana Islands, 7430"
      },
      {
        "_id": "5ed56b360a590c472734019d",
        "balance": "$3,937.51",
        "picture": "https://source.unsplash.com/random/400x300",
        "age": 20,
        "eyeColor": "green",
        "name": {
          "first": "Audra",
          "last": "Ortega"
        },
        "company": "GEOFORMA",
        "email": "audra.ortega@geoforma.biz",
        "phone": "+1 (921) 440-2077",
        "address": "388 Albemarle Terrace, Abiquiu, Northern Mariana Islands, 7430"
      })
    }
    this.contador ++;
    
  }

}
