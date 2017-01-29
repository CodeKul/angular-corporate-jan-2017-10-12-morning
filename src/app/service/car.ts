import { engineFact } from './engine.factory';
import { Runnable } from './runnable';
import { Engine } from './engine';
export class Car {
    //private engine : Engine;

    constructor(private engine : Runnable) {
        //this.engine = new Engine();
    }
}

let car = new Car(engineFact.audi);