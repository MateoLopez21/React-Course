import {render, screen} from '@testing-library/react'
import { FirtsApp } from '../src/FirtsApp'

describe('Pruebas en <FirstApp />', () => { 

    const name = 'Mateo López'

    test('Debe de hacer match con el snapshot', () => { 

        const { container } = render(<FirtsApp name={ name } />);

        expect( container ).toMatchSnapshot();

     })
    test('Debe de mostrar el nombre "Mateo López" ', () => { 

      render(<FirtsApp name={ name } />);

      expect( screen.getByText(name)).toBeTruthy();

     })
    test('Debe de mostrar el nombre en un h1', () => { 

      render(<FirtsApp name={ name } />);

      expect( screen.getByRole('heading', { level: 1}).innerHTML).toContain(name);

     })
    test('Debe de mostrar el nombre enviado por props', () => { 

      render(<FirtsApp name={ name } />);

      expect(screen.getAllByText(name)).toBeTruthy();

     })
 })