import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => { 

    test('getSaludo debe retornar "Hola Mateo"', () => { 

        const name = 'Mateo';

        const sayHi = getSaludo(name);

        console.log(sayHi);

        expect( sayHi ).toBe( 'Hola Mateo' );
     })
 })