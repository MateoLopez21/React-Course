import PropTypes from 'prop-types';

const newSaludo = (name) => {
    return `Hola, ${name}`
}

// const newMessage = 'Mateo López';
export const FirtsApp = ( { name } ) => {


    return (
        <>
            <h1> { newSaludo(name) } </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, tempora? Sapiente nisi iure perferendis est esse quam aliquam odio aliquid soluta deleniti sunt, dolorum ipsam nihil sint vero omnis placeat.</p>
        </>
    )
}


FirtsApp.propTypes = {
    name: PropTypes.string.isRequired
}

FirtsApp.defaultProps = {
    name: 'No hay nombre'
}