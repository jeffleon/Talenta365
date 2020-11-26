import {useState, useEffect} from 'react';

/* fetch custome hook */
const useFetch = (url, method="GET") => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // do a fetch and look for a error or a data mainwhile the loading is true 
    useEffect(()=>{
        const fetchsource = async () =>{
            try{
                const requestOptions = {
                    method: method,
                    headers: { 'Content-Type': 'application/json' }
                }
                var response = await fetch(url, requestOptions); 
                const data = await response.json();
                setData(data);
                setLoading(false);
            }catch(error){
                setError(error);
                setLoading(false);     
            }
        }
        fetchsource()
    },[url, method])

    return {data, loading, error}
}

export default useFetch