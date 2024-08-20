import { useEffect, useState } from "react";

export default function useFetch(url, option = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true);
        try {
            const res = await fetch(url, { ...option });
            if (!res.ok) throw new Error(res.statusText);
            const result = await res.json()
            if (result) {
                setData(res);
                setError(null);
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
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