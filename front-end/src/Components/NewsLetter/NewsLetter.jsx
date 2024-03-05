import React from "react";
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <h1>Get Exclusive Offers To Your Email!</h1>
            <p>Subscribe to our newsletter today</p>
            <div>
                <input type="email" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;