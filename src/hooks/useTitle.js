import React, { useEffect,  } from "react";

function useTitle(title) {

    useEffect(()=>{
        document.title =`${title}/cinemate`
    })

}
export default useTitle

