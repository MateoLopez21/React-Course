import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {

    const initialValue = 10;

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render(<CounterApp value={initialValue} />);

        expect(container).toMatchSnapshot();

    })


    test('Debe de mostrar el valor iniciar de 100', () => {

        render(<CounterApp value={initialValue} />);

        expect(screen.getByText(initialValue)).toBeTruthy();
    })


    test('Debe de incrementar con el botón +1', () => {

        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));

        expect(screen.getByText('11')).toBeTruthy();

    })


    test('Debe de decrementar con el botón -1', () => {

        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        screen.debug();
        expect(screen.getByText('9')).toBeTruthy();

    })


    test('Debe de funcionar el botón Reset', () => {

        render(<CounterApp value={initialValue} />);

        for (let i = 0; i < 3; i++) {
            fireEvent.click(screen.getByText('+1'));
        }
            fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        screen.debug();
        expect(screen.getByText(initialValue)).toBeTruthy();

    })
})