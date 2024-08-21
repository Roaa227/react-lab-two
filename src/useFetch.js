import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("failed to fetch the data");
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setIsLoading(false);
                });
        }, 5000);
    }, []);

    return {data , isLoading , error};
}

export default useFetch ;