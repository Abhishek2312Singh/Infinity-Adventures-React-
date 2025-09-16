import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function DynamicBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Array of banner data with images and corresponding content
  const bannerData = [
    {
      image: '/bg-hero.jpg',
      title: 'Enjoy Your Vacation With Us',
      subtitle: 'We\'re Here to Help You Plan Your Dream Trip.',
      button1: { text: 'Explore Now', icon: 'fa-compass', link: '/packages' },
      button2: { text: 'Learn More', icon: 'fa-info-circle', link: '/about' }
    },
    {
      image: '/dubai-1.jpg',
      title: 'Discover Dubai',
      subtitle: 'Experience the luxury and modern marvels of the City of Gold.',
      button1: { text: 'Dubai Tours', icon: 'fa-building', link: '/packages' },
      button2: { text: 'View Details', icon: 'fa-eye', link: '/about' }
    },
    {
      image: '/thailand-1.jpg',
      title: 'Explore Thailand',
      subtitle: 'Immerse yourself in vibrant culture and tropical paradise.',
      button1: { text: 'Thailand Trips', icon: 'fa-umbrella-beach', link: '/packages' },
      button2: { text: 'Book Now', icon: 'fa-calendar', link: '/contact' }
    },
    {
      image: '/maldives-1.jpeg',
      title: 'Maldives Paradise',
      subtitle: 'Relax in overwater bungalows with crystal clear waters.',
      button1: { text: 'Luxury Stay', icon: 'fa-water', link: '/packages' },
      button2: { text: 'Reserve', icon: 'fa-star', link: '/contact' }
    },
    {
      image: '/singapore-1.jpeg',
      title: 'Visit Singapore',
      subtitle: 'Discover the futuristic city with iconic landmarks and gardens.',
      button1: { text: 'City Tours', icon: 'fa-city', link: '/packages' },
      button2: { text: 'Explore', icon: 'fa-map', link: '/about' }
    },
    {
      image: '/goa1.jpg',
      title: 'Goa Beach Paradise',
      subtitle: 'Relax on pristine beaches and enjoy vibrant nightlife.',
      button1: { text: 'Beach Tours', icon: 'fa-sun', link: '/packages' },
      button2: { text: 'Discover', icon: 'fa-search', link: '/about' }
    },
    {
      image: '/uttrakhand.jpg',
      title: 'Uttrakhand Hills',
      subtitle: 'Discover the serene beauty of the Himalayas.',
      button1: { text: 'Hill Stations', icon: 'fa-mountain', link: '/packages' },
      button2: { text: 'Adventure', icon: 'fa-hiking', link: '/about' }
    },
    {
      image: '/vietnam-1.jpg',
      title: 'Vietnam Heritage',
      subtitle: 'Explore rich history and stunning landscapes.',
      button1: { text: 'Heritage Tours', icon: 'fa-landmark', link: '/packages' },
      button2: { text: 'Learn More', icon: 'fa-book', link: '/about' }
    }
  ]

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1
        )
        setIsAnimating(false)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [bannerData.length])

  // Handle manual navigation
  const handleImageChange = (index) => {
    if (index === currentImageIndex) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentImageIndex(index)
      setIsAnimating(false)
    }, 300)
  }

  const currentBanner = bannerData[currentImageIndex]

  return (
    <div className="hero-banner-container">
      {/* Background Images with Fade Effect */}
      {bannerData.map((banner, index) => (
        <div
          key={index}
          className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${banner.image})`
          }}
        />
      ))}
      
      {/* Content Overlay */}
      <div className="hero-content-overlay">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className={`hero-content ${isAnimating ? 'content-animating' : ''}`}>
                <h1 className={`display-3 text-white mb-4 hero-title ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                  {currentBanner.title}
                </h1>
                <p className={`fs-4 text-white mb-5 hero-subtitle ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                  {currentBanner.subtitle}
                </p>
                <div className={`hero-buttons ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                  <Link to={currentBanner.button1.link} className="btn btn-primary btn-lg me-3 hero-btn-primary">
                    <i className={`fa ${currentBanner.button1.icon} me-2`}></i>
                    {currentBanner.button1.text}
                  </Link>
                  <Link to={currentBanner.button2.link} className="btn btn-outline-light btn-lg hero-btn-secondary">
                    <i className={`fa ${currentBanner.button2.icon} me-2`}></i>
                    {currentBanner.button2.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Navigation Arrows */}
      <button 
        className="hero-nav hero-nav-prev"
        onClick={() => handleImageChange(currentImageIndex === 0 ? bannerData.length - 1 : currentImageIndex - 1)}
      >
        <i className="fa fa-chevron-left"></i>
      </button>
      <button 
        className="hero-nav hero-nav-next"
        onClick={() => handleImageChange(currentImageIndex === bannerData.length - 1 ? 0 : currentImageIndex + 1)}
      >
        <i className="fa fa-chevron-right"></i>
      </button>

    </div>
  )
}
