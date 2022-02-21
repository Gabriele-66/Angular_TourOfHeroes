import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from 'src/assets/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroSerice: fetched heroes');
    return heroes;
  }

}
