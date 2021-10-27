import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TREASURES } from '../mock-treasures';
import { TreasureService } from '../services/treasure.service';
import { Treasure } from '../treasures/treasures';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  treasures!: Treasure[];
  constructor(private treasureService: TreasureService) { }

  ngOnInit(): void {
    this.treasures = this.treasureService.getTreasures();
  }

  onClickTreasure(treasure: Treasure) {
    this.treasureService.changeTreasure(treasure);
  }

}
