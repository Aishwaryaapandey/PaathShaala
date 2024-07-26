import React from 'react';
import businessImage from './business.jpg'; 
import marketingImage from './marketting.jpg'; 
import technologyImage from './technology.jpg'; 
import designImage from './design.jpg';

const CourseCategories = () => {
  return (
    <section className="course-categories">
      <h2>Popular Categories</h2>
      <div className="categories">
        <div className="category" style={{ backgroundImage: `url(${businessImage})` }}>
          <div className="category-text">Business</div>
        </div>
        <div className="category" style={{ backgroundImage: `url(${technologyImage})` }}>
          <div className="category-text">Technology</div>
        </div>
        <div className="category" style={{ backgroundImage: `url(${designImage})` }}>
          <div className="category-text">Design</div>
        </div>
        <div className="category" style={{ backgroundImage: `url(${marketingImage})` }}>
          <div className="category-text">Marketing</div>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
