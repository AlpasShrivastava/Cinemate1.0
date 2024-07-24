import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pagenotfound from '../assets/Images/pagenotfound.jpg'
import Button from "../components/Button";

function PageNotFound() {
    useEffect(()=>{
        document.title =`page not found/cinemate`
    })

    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col my-4 items-center px-2">
                    <p className="py-4 text-4xl text-gray-700 dark:text-white">404, Oops!</p>
                    <div className="max-w-lg">
                        <img className="rounded" src={pagenotfound} alt="Page Not Found" />
                    </div>
                </div>

                <div className=" flex justify-center my-4 ">
                    <Link to='/'>
                        <Button childern={"Back To App"} />
                    </Link>
                </div>
            </section>
        </main>
    )
}
export default PageNotFound;
