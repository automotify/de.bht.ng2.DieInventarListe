/**
 * Created by andre on 12.06.2016.
 */
import { Injectable } from 'angular2/core';

import { GEARS } from './mock-gear';

@Injectable()
export class GearService{
    getGear(){
        return Promise.resolve(GEARS);
    }
}