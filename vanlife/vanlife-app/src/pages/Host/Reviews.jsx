import React from 'react';
import {AiFillStar} from 'react-icons/Ai'
import { BsStarFill } from "react-icons/bs"

export default function Reviews() {
    
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        }
    ]
    
    
    
    return (
        <div>
            <div className="dashboard-review">
                <h2>Your Reviews <span className="light_text">Last <b>30 days</b></span></h2>
            </div>
            <div className="dashboard-rating">
             <b>5.0</b> <AiFillStar/> Overall
            </div>
            <div className="review-grid-container">
              <div className="review-item review-item1">5 Stars</div>
              <div className="review-item review-item2">
                  <div className="bar-container">
                    <div className="bar bar-5"></div>
                  </div>
                </div>
                <div className="review-item review-r">100%</div>
                
              <div className="review-item review-item1">4 Stars</div>
              <div className="review-item review-item2">
                  <div className="bar-container">
                    <div className="bar bar-4"></div>
                  </div>
                </div>
                <div className="review-item review-r">70%</div>
                
              <div className="review-item review-item1">3 Stars</div>
              <div className="review-item review-item2">
                <div className="bar-container">
                    <div className="bar bar-3"></div>
                  </div>
                </div>
                <div className="review-item review-r">0%</div>
                
              <div className="review-item review-item1">2 Stars</div>
              <div className="review-item review-item2">
                <div className="bar-container">
                    <div className="bar bar-2"></div>
                  </div>
                </div>
                <div className="review-item review-r">0%</div>
                
              <div className="review-item review-item1">1 Star</div>
              <div className="review-item review-item2">
                <div className="bar-container">
                    <div className="bar bar-1"></div>
                  </div>
                </div>
                <div className="review-item review-r">2%</div>
                
            </div>
            <div className="host-reviews">
            <h3>Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div key={review.id}>
                    <div className="review">
                        {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className="review-star" key={i} />
                        ))}
                        <div className="info">
                            <p className="name">{review.name}</p>
                            <p className="date">{review.date}</p>
                        </div>
                        <p>{review.text}</p>
                    </div>
                    <hr />
                </div>
            ))}
            </div>
        </div>
    )
};