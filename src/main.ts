import './polyfills.ts';
import 'hammerjs';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule} from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(
    success => console.log('AppModule bootstrapped!'),
    error => console.log(error)
  );
