import { useEffect, useState } from "react";

const useData = () =>{
    const [tests, setTests] = useState();
    useEffect(()=>{
        fetch("/fakeData.json")
        .then(res=>res.json())
        .then(data=> setTests(data))
    },[])
    return {tests};
};
export default useData;