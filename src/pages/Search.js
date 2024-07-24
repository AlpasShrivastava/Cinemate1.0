import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch"
import useTitle from "../hooks/useTitle"

function Search({ api_path }) {
    const [searchParam] = useSearchParams();
    const queryTerm = searchParam.get('query');
    const { data: movies } = useFetch(api_path, queryTerm)

    // useEffect(()=>{
    //     document.title =`search result for : ${queryTerm}`
    // })
    useTitle(`search result for : ${queryTerm}`);
    return (
        <main>
            <section>
                <p className="text-3xl text-gray-700 text-left">{movies.length == 0 ? `No result found for ${queryTerm}` : `Results showing for ${queryTerm}`}</p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap gap-4">
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


export default Search;
