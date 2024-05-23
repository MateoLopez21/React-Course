import { fireEvent, render, screen, act } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas en <GifExpertApp />', () => {

    const inputValue = 'Fortnite'
    
    const {getByRole, getAllByText} = render(<GifExpertApp />);
    const input = getByRole('textbox');
    const form = getByRole('form');

    test('No debe de agregar dos categorias con el mismo nombre', () => {

        fireEvent.input(input, { target: {value: inputValue} });
        fireEvent.submit(form)
        screen.debug()

        expect(getAllByText(inputValue)).toBeDefined();

        fireEvent.input(input, { target: {value: inputValue} });
        fireEvent.submit(form)

        expect(getAllByText(inputValue).length).toBe(1);
    })
})