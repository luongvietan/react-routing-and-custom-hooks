import { useEffect, useState } from "react";

export default function useFetch(url, option = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true);
        try {
            const respond = await fetch(url, { ...option }); 
            if (!respond.ok) throw new Error(respond.statusText);
            const result = await respond.json()
            if (result) {
                setData(result);
                setError(null);
                setLoading(false)
            }
        } catch (error) {
            console.log(`error : `, error);
            setLoading(false);
            setError(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])
    return {
        data, loading, error
    }
}