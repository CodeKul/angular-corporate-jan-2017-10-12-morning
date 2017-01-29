import { AudiEngine } from './audi.engine';
import { Engine } from './engine';
export const engineFact = {
    bmw : new Engine(),
    audi : new AudiEngine()
};