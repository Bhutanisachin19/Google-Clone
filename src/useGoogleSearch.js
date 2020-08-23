//custom HOOK 
import {useState , useEffect} from 'react';
import API_KEY from './Keys';

const CONTEXT_KEY = "a343c5645dbaf7f85"; //this is the key from cse.google.com/cse/create/new it tells google which search engine to use

const useGoogleSearch = (term) => {
    const [data , setData] =useState(null);

    useEffect(() => {
        const fetchData = async() => {
            //this connects to google custom search api
            // cx is the search engine and q is the query
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData();
    }, [term])

    return { data } 
};

export default useGoogleSearch