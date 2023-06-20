import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(){}
  removeParams!: (url: string) => string;
  makeFirstLetterUp!: (item: string) => string;
  findParam!: (link: string) => boolean;
  findMin!: (arr: any) => {
    min: any;
    index: number;
  };
}
