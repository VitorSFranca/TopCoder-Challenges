import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TREASURES } from '../mock-treasures';
import { Treasure } from '../treasures/treasures';

@Injectable({
  providedIn: 'root'
})
export class TreasureService {

  changeSelectedTreasure = new Subject<Treasure>();

  constructor() { }

  onSelectTreasure(): Observable<Treasure> {
    return this.changeSelectedTreasure.asObservable();
  }

  changeTreasure(treasure: Treasure): void {
    this.changeSelectedTreasure.next(treasure);
  }

  getTreasures() {
    return TREASURES;
  }

}
