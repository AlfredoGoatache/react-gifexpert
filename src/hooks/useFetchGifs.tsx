import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';


interface Data {
    data: Array<number>;
    loading: boolean;
}

const useFetchGifs = ( category: any ) => {

    let data: Data = {data: [],loading: true};

    const [state, setState] = useState(data)

    useEffect(()=> {

        getGifs(category)
        .then(imgs => {
            setState({
                data: imgs,
                loading: false
            });
        });
    }, [category])

    return state;
}

export {
    useFetchGifs
}


