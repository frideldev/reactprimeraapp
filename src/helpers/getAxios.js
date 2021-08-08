
import axios from 'axios';
export const getAxios = async() => {
    try {
        const url='https://rickandmortyapi.com/api/character';
        const resp=await axios.get(url);
        return resp; 
    } catch (error) {
        return 'No se pudo completar la operacion';
    }
    
}
