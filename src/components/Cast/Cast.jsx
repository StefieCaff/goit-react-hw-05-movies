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
        return () => mounted = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            {castData.length === 0
                ? (
                   <p>There is no data in the TMDB database for the cast of this film.</p>
                )
                : castData.map((cast, idx) => (
                    <h3 key={idx}>{ cast.name}</h3>
                ))
            }
        </div>
    );
};

export default Cast;