import { getImage } from "../../src/base-pruebas/11-async-await";


describe('Pruebas en 11-async-await', () => { 

    test('getImage debe de retornar un URL de la imagen', async() => { 

        const resp = await getImage();

        console.log(resp);

        expect( typeof resp ).toBe('string');
        // expect( resp ).toBe('No se encontró la imagen');
     });
 })