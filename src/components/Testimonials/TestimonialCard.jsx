import React from 'react';

const TestimonialCard = ({review}) => {
    const {image,title,subtitle,id,comment}=review;
    
    return (
        <div className="testimonial_item text-center">
            <div className="thumb flex justify-center">
                <img className='w-20 rounded-full' src={image} alt="" />
            </div>
            <h3 className="testimonials_title">{title}</h3>
            <span className="subtitle">{subtitle}</span>
            <div className="comment">{comment}</div>
        </div>
    );
};

export default TestimonialCard;