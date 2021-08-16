
  export const getGifs = async( category: any )=>{
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=RMehG1d6gNhfYrAp0TLETEJdSYxF5FUu`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( ( img: any ) => {
        return {
            id:     img.id,
            title:  img.title,
            url:    img.images?.downsized_medium.url
        }
    })
    return gifs;
}