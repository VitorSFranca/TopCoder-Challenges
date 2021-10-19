import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import {
  catchError,
  debounceTime, distinctUntilChanged, switchMap, tap
} from 'rxjs/operators';
import { Translation } from 'src/app/Services/translation';
import { TranslationService } from 'src/app/Services/translation.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {
  result$!: Observable<Translation>;
  private toTranslate = new Subject<string>();
  originalLang = 'English';
  targetLang = 'Português';
  placeholder = 'Type anything in English...';

  constructor(private translationService: TranslationService) {}

  translate(term: string): void {
    this.toTranslate.next(term);
  }

  ngOnInit(): void {
    this.result$ = this.toTranslate.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((text: string) => this.translationService.translate(text)),
      catchError(err => {
        console.debug('Error %s', JSON.stringify(err));
        return of({translation: ''});
      })
    );
  } 

}
