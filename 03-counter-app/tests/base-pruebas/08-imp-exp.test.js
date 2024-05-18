import { getHeroById, getHeroByOwner as getHeroByOwner } from "../../src/base-pruebas/08-imp-exp";
import heros from "../../src/data/heros";

describe('Pruebas en 08-imp-exp', () => {

    // Pruebas de la función getHeroById
    test('getHeroById debe de retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroById(id);

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    })

    test('getHeroById debe de retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroById(id);

        expect( hero ).toBeFalsy();
    })

    // Pruebas de la función getHeroByOwner
    test('getHeroByOwner debe de retornar un arreglo con 3 héroes de DC', () => { 

        const owner = 'DC';
        const hero = getHeroByOwner(owner);

        console.log(hero);
        expect( hero.length ).toBe( hero.length );
        expect( hero ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
     })

     test('getHeroByOwner debe de retornar un arreglo con 2 héroes de Marvel', () => { 

        const owner = 'Marvel';
        const hero = getHeroByOwner(owner);

        console.log(hero);
        expect( hero.length ).toBe( hero.length);
        expect( hero ).toEqual( heros.filter ( (hero) => hero.owner === owner));
     })

})