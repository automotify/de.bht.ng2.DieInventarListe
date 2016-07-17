import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesRoutes }                 from "./heroes.routes";
import { DashboardRoutes }              from "./dashboard.routes";

export const routes: RouterConfig = [
    ...DashboardRoutes, ...HeroesRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];