import { getActiveUSer, getUser } from "../../src/base-pruebas/05-funciones"


describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const user = getUser();

        console.log(user);

        expect( user ).toEqual({
            uid: 'ABC123',
            userName: 'El_Papi1502'
        })
    })

    test('getActiveUSer debe de retornar un objeto', () => { 

        const userName = 'Duke';

        const activeUser = getActiveUSer( userName );

        expect( activeUser ).toStrictEqual( {
            uid: 'ABC567',
            userName
        } );

        console.log( {
            uid: 'ABC567',
            userName
        })
     })
})