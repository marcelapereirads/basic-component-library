import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SequenceGeneratorService {
  private _sequence = 1;

  get sequence(): number {
    return this._sequence++;
  }
}
