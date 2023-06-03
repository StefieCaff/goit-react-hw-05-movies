import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getReviews } from "API/get-reviews";

const Reviews = () => {
    const { movieID } = useParams();
    const [reviewsData, setReviewsData] = useState([]);
    console.log(movieID, 'id reviews');

    useEffect(() => {
        let mounted = true
        getReviews(movieID)
            .then(data => {
                if (mounted) {
                    setReviewsData(data);
                    console.log(data, 'reviews');
               }
           })
    },[])

    return (
        <div>Reviews</div>
    );
};

export default Reviews;