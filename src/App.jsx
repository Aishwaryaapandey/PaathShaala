import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import CourseCategories from './components/CourseCategories';
import FeaturedCourses from './components/FeaturedCourses';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SearchBar />
      <CourseCategories />
      <FeaturedCourses />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

