

export const getImage = async() => {

    try {

        const apiKey = 'xmqu5uECYcphLbcIwrp0USJgzVNvWCTk';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        return 'No se encontró la imagen'
    }
    
    
    
}




