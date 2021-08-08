import { useEffect, useState } from 'react'
import { getAxios } from '../helpers/getAxios';

export const UseImages = () => {
    const [state, setState] = useState({
        data:[],
        loading:true
    });
    useEffect(()=>{
        getAxios().then(resp=>setState({
           data:resp.data.results,
           loading:false 
        }));
    },[]);
    return state;
}
