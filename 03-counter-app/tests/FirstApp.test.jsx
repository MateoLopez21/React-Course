import {render} from '@testing-library/react'
import { FirtsApp } from '../src/FirtsApp'

describe('Pruebas en <FirstApp />', () => { 


    // test('Debe de hacer match con el snapshot', () => { 

    //     const name = 'Mateo López';

    //     const { container } = render(<FirtsApp name={ name } />);

    //     expect( container ).toMatchSnapshot();

    //  })

     test('Debe de mostrar el nombre en un H1', () => { 
        const name = 'Mateo López';

        const { container, getByText, getByTestId } = render(<FirtsApp name={ name }/>);

        expect( getByText(name)).toBeTruthy();

        // const h1 = container.querySelector('h1');

        // expect(h1.innerHTML).toContain( name );

        expect(getByTestId('test-name').innerHTML).toContain(name);

      })
     test('Debe de mostrar el nombre enviado por props', () => { 
        const name = 'Mateo López';

        const { getByText} = render(<FirtsApp name={ name }/>);

        expect(getByText(name)).toBeTruthy();

      })
 })