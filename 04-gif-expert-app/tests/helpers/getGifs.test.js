import { getGifs } from '../../src/helpers/getGifs'

describe('Pruebas en getGifs()', () => { 

    test('Debe de retornar un arreglo de gifs', async() => { 

        const gifs = await getGifs('One punch');

        console.log(gifs);

        expect(gifs.length).toBe(10);

     })
 })