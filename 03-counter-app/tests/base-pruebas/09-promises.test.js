import { getHeroByIdAsync } from "../../src/base-pruebas/09-promises";
import heros from "../../src/data/heros";


describe('Pruebas en 09-promises', () => { 

    test('getHeroByIdAsync debe de retornar un héroe', ( done ) => { 

        const id = 1;
        
        getHeroByIdAsync(id)
            .then( hero => {
                
                expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

                done();
            })
     });

     test('getHeroByIdAsync debe de retornar un error si no existe', ( done ) => { 

        const id = 100;
        
        getHeroByIdAsync(id)
            .catch( error => {
                
                console.log( error );
                done();
            })
     });
 })