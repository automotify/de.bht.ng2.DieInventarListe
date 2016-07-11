import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_PROVIDERS} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";

import {AppComponent} from "./app.component";
//import {DBInMemoryData} from "./services/db-in-memory.service";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    /*
    provide(XHRBackend, { useClass: InMemoryBackendService }),  // in-mem server
    provide(SEED_DATA,  { useClass: DBInMemoryData })           // in-mem server data for heroes and items
    */
 ]);