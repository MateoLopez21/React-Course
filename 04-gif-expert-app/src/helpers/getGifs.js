import axios from 'axios';

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4FLu00oELVehOlBQycYpvM4fci6vEKEl&q=${category}&limit=10`;

    const resp = await axios.get(url);
    const { data } = resp.data;

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
};