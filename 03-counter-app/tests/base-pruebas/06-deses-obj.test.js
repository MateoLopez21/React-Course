import { userData } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
    test('userData debe de retornar un objeto', () => {

        const data = {
            nickName: 'DukeC_02',
            age: 21,
            latlng: [{
                lat: 14.1232,
                lng: -12.3232
            },
            {
                lat: 14.5232,
                lng: -12.3221
            }]
        };

        const { nickName, age } = data;

        const user = userData(nickName, age);

        expect(user).toEqual( data );

        console.log( data );
    })
})