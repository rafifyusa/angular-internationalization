import {User} from '@/_models/user';
import {of} from 'rxjs';

export class UserServiceMock {
  private dummyUser: User = {
    id: 1,
    firstName: 'Budi',
    username: 'budi',
    password: 'password',
    lastName: 'Sudjatmiko',
    token: 'asdawdqweawdwa'
  };

  public getAll() {
    return of([this.dummyUser]);
  }
}
