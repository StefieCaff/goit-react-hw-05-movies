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
                    setReviewsData(data.results);
                    console.log(data.results, 'reviews');
                    console.log(reviewsData.content, 'content');
               }
           })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            {reviewsData.length === 0
                ? (
                    <p>There is no data in the TMDB database for reviews of this film.</p>
                )
                : reviewsData.map((review, idx) => (
                    <p key={idx}>{review.content}</p>
                ))
            }
        </div>
    );
};

export default Reviews;