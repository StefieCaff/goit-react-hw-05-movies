import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getCredits } from "API/get-cast";

const Cast = () => {
    const { movieID } = useParams();
    const [castData, setCastData] = useState([]);
    console.log(movieID, 'id');
    
    useEffect(() => {
        let mounted = true;
        getCredits(movieID)
            .then(data => {
                if (mounted) {
                    setCastData(data.cast);
                    console.log(data.cast, 'cast');
                };
            });
        console.log(castData.name, "name");
        return () => mounted = false;
    },[])

    return (
        <div>
            {castData ? (
                <h3>hello</h3>
            )
            : (<p>There is no data available in the TMDB database for the cast of this film. </p>)}
        </div>
    );
};

export default Cast;