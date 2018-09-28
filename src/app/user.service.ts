import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {

  currentUsername: Subject<string> = new Subject<string>();

  constructor() { }

}
