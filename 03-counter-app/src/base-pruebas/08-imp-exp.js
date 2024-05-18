// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heros';

// console.log( owners );




export const getHeroById = (id) => heroes.find( (hero) => hero.id === id );

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroByOwner = ( owner ) => heroes.filter( (hero) => hero.owner === owner );

// console.log( getHeroesByOwner('Marvel') );


