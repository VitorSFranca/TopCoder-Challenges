import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TREASURES } from '../mock-treasures';
import { TreasureService } from '../services/treasure.service';
import { Treasure } from './treasures';

@Component({
  selector: 'app-treasures',
  templateUrl: './treasures.component.html',
  styleUrls: ['./treasures.component.scss']
})
export class TreasuresComponent implements OnInit {

  treasure$!: Observable<Treasure>;
  constructor(private treasureService: TreasureService) { }

  ngOnInit(): void {
    this.treasure$ = this.treasureService.onSelectTreasure();
  }

}
