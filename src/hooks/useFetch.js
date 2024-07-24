import React, { useEffect, useState } from "react";

function useFetch(api_path, queryTerm = "") {
    const [data, setData] = useState([])
    const url = `https://api.themoviedb.org/3/${api_path}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    const getData = async () => {
        try {
            const response = await fetch(url)
            const json = await response.json()
            setData(json.results)
            // console.log(json.results)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getData()
    }, [url])

    return {
        data
    }
}
export default useFetch

