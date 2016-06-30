import { bind, provide } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { Sorter } from './shared/utils/sorter';
import { DataService } from './shared/services/data.service';

import { InMemoryBackendConfig, InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryService } from '../api/in-memory.service';

export const APP_PROVIDERS = [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: InMemoryBackendService }),
    provide(SEED_DATA, { useClass: InMemoryService }),
    provide(InMemoryBackendConfig, { useValue: { delay: 600 } }),
     Sorter,
    DataService
];