

export const getGifs = async(category) => {                        

    const url = `https://api.giphy.com/v1/gifs/search?api_key=iRwR9ezJubUtpuxvbPfnNi2wfxq0BUep&q=${ category }&limit=10`;

    const response = await fetch( url );            //al usar await la funcion es asincrona de ahi el async

    const { data } = await response.json()

    const gifs = data.map( img => ({
       
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }))

    
    return gifs;
}
