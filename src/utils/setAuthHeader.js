// IMPORTS
import axios from 'axios'; 

// SET AUTH HEADER
const setAuthHeader = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token; 
    } else {
        delete axios.defaults.headers.common['Authorization']; 
    }   
}; 

// EXPORTS
export default setAuthHeader; 