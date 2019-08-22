import {Component} from '@angular/core';
import {User} from './_models/user';
import {Router} from '@angular/router';
import {AuthenticationService} from './_services/authentication.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'regist-login';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
}
