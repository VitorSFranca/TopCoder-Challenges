import { Component, OnInit } from '@angular/core';
import { treasures } from '../mock-treasures';
import { Treasure } from './treasures';

@Component({
  selector: 'app-treasures',
  templateUrl: './treasures.component.html',
  styleUrls: ['./treasures.component.scss']
})
export class TreasuresComponent implements OnInit {

  treasure!: Treasure;
  constructor() { }

  ngOnInit(): void {
    this.treasure = treasures[0];
  }

}
