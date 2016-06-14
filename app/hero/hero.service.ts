import { Injectable } from 'angular2/core';
import { heroList } from "./mock-heroes";

@Injectable()
export class HeroService {

    /**
     * Retrieve the heroes.
     *
     * @returns {Promise<HeroList>}
     */
    getHeroes() {
        return Promise.resolve(heroList);
    }
}