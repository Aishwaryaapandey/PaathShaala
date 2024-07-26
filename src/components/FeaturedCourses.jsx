import React from 'react';

const FeaturedCourses = () => {
  return (
    <section className="featured-courses">
      <h2>Featured Courses</h2>
      
        <div className="courses">
          <div className="course-card">
            <h3>Machine Learning</h3>
            <p>Instructor: John Doe</p>
            <p className="rating">Rating: ★★★★☆</p>
            <p className="price">$99.99</p>
          </div>
          <div className="course-card">
            <h3>Big Data</h3>
            <p>Instructor: Jane Smith</p>
            <p className="rating">Rating: ★★★★★</p>
            <p className="price">$129.99</p>
          </div>
          <div className="course-card">
            <h3>DSA</h3>
            <p>Instructor: Alice Johnson</p>
            <p className="rating">Rating: ★★★☆☆</p>
            <p className="price">$89.99</p>
          </div>
          <div className="course-card">
            <h3>Artificial Intelligence</h3>
            <p>Instructor: Hellen Keller</p>
            <p className="rating">Rating: ★★★☆☆</p>
            <p className="price">$89.99</p>
          </div>
          <div className="course-card">
            <h3>Web Development</h3>
            <p>Instructor: Hellen Keller</p>
            <p className="rating">Rating: ★★★☆☆</p>
            <p className="price">$89.99</p>
          </div>
          <div className="course-card">
            <h3>Internet of Things</h3>
            <p>Instructor: Hellen Keller</p>
            <p className="rating">Rating: ★★★☆☆</p>
            <p className="price">$89.99</p>
          </div>
        </div>
      
    </section>
  );
};

export default FeaturedCourses;
