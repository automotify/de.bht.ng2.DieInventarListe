/// <reference path="../typings/index.d.ts" />
import {bootstrap}              from "@angular/platform-browser-dynamic";
import {HTTP_PROVIDERS}         from "@angular/http";

import {AppComponent}           from "./app.component";
import {APP_ROUTER_PROVIDERS}   from "./routes/app.routes";
//import {DBInMemoryData} from "./services/db-in-memory.service";
import {DND_PROVIDERS}         from 'ng2-dnd/ng2-dnd';


bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    DND_PROVIDERS,
    /*
    provide(XHRBackend, { useClass: InMemoryBackendService }),  // in-mem server
    provide(SEED_DATA,  { useClass: DBInMemoryData })           // in-mem server data for heroes and items
    */
 ]);