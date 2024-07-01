import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing.module';
import { AuthenticationGuard } from './util/authentication.guard';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), AuthenticationGuard]
};
