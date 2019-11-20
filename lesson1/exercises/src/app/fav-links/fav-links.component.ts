import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

favLinks = ["https://www.astrologyzone.com/", "https://www.delish.com/", "https://www.bedbathandbeyond.com/"];
  constructor() { }

  ngOnInit() {
  }

}
