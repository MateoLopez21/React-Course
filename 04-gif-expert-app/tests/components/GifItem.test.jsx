import {render, screen} from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en el <GifItem />', () => { 

    const title = 'Saitama'
    const url = 'https://one-punch.com/saitama.jpg'

    test('Debe de hacer match con el snapshot', () => { 
         
        const { container } = render(<GifItem title={title} url={url} />);

        expect( container ).toMatchSnapshot();
     })

     test('Debe de mostrar la imagen con el URL y el ALT indidcado', () => { 
        
        const { container } = render(<GifItem title={title} url={url} />);

        // expect( screen.getByRole('img').src).toBe( url );

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url );
      })

      test('Debe de mostrar el título en el componente', () => { 

        render(<GifItem title={title} url={url}/>);

        expect( screen.getByText(title) ).toBeTruthy();

       })
 })