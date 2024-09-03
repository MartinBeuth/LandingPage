import {useState} from 'react';

const useLoading=() => {
    const[isLoading,setIsLoading]=useState(false);
    const startLoading=()=>{
        setIsLoading(true);
        console.log("Laden gestartet.");
    };
    const stopLoading=()=>{
        setIsLoading(false);
        console.log("Laden abgeschlossen.");
    };
    return [isLoading,startLoading,stopLoading];
};

export default useLoading;