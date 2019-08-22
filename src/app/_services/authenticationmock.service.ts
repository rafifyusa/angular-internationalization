import {User} from '@/_models/user';

export class AuthenticationServiceMock {
  private dummyUser: User = {
    id: 1,
    firstName: 'Budi',
    username: 'budi',
    password: 'password',
    lastName: 'Sudjatmiko',
    token: 'asdawdqweawdwa'
  };

  public get currentUserValue(): User {
    return this.dummyUser;
  }
}
