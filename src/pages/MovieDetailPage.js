import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backup from '../assets/Images/backup.jpg'


function MovieDetail() {
    const [data, setData] = useState([]);
    const image = data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : backup;

    const param = useParams();
    // console.log(data)

    const getData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${param.id}?api_key=67805d30a12125f29162ea1a8357dfb9`);
            const json = await response.json();
            // console.log(json);
            setData(json);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        document.title = `${data.original_title}/cinemate`
    })
    return (
        <main>
            <section className="flex justify-around py-5 flex-wrap">
                <div >
                    <img className="rounded" src={image} alt={data.original_title} />
                </div>
                <div className="text-gray-700 text-xl py-2 max-w-2xl dark:text-white">
                    <h1 className="text-xl my-3 font-bold text-center ">{data.original_title}</h1>
                    <p className="my-3">{data.overview}</p>

                    {data.genres ? (
                        <p className="my-6">
                            {data.genres.map((genre) => (
                                <span className="rounded border border-gray-400 mr-2 p-2" key={genre.id}>{genre.name}</span>
                            ))
                            }
                        </p>
                    ) : ""}

                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{data.vote_average}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{data.vote_count}</span>
                    </div>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Runtime: </span>
                        <span>{data.runtime} min.</span>
                    </p>
                    <p className="my-4">
                        <span className="mr-2 font-bold">Budget: </span>
                        <span>{data.budget} </span>
                    </p>
                    <p className="my-4">
                        <span className="mr-2 font-bold">Revenue: </span>
                        <span>{data.revenue} </span>
                    </p>
                    <p className="my-4">
                        <span className="mr-2 font-bold">Revenue: </span>
                        <span>{data.revenue} </span>
                    </p>
                    <p className="my-4">
                        <span className="mr-2 font-bold">Release Date: </span>
                        <span>{data.release_date} </span>
                    </p>
                    <p className="my-4">
                        <span className="mr-2 font-bold">IMDB Code : </span>
                        <a href={`https://www.imdb.com/title/${data.imdb_id}`} target="_blank" rel="noreferrer" className="text-blue-800" > {data.imdb_id} </a>
                    </p>
                </div>
            </section>
        </main>
    )
}
export default MovieDetail
