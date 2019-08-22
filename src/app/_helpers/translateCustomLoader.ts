import {TranslateLoader} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';

declare let readJSON: any;

export class TranslateCustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    if (lang === 'de') {
      const de = readJSON('assets/i18n/de.json');
      return of(de);
    }
    if (lang === 'id') {
      const id = readJSON('assets/i18n/id.json');
      return of(id);
    }
    const en = readJSON('assets/i18n/en.json');
    return of(en);
  }
}
