import { newArray } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => { 

    test('newArray debe de retornar un arreglo con un string y un número', () => { 

        const [letters, numbers ] = newArray();

        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );
     })
 })