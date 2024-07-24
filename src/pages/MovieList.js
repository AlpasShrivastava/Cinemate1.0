import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch"

function MovieList({api_path,title}) {

    // const [movies, setMovies] = useState([])

    const {data:movies} = useFetch(api_path)

    useEffect(()=>{
        document.title =`${title}/cinemate`
    })

    
    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap gap-4 other:justify-evenly">
                    {
                        movies.map((data) => (
                            <Card key={data.id} data={data} />
                        ))
                    }
                </div>
            </section>
        </main>
    )
}
export default MovieList