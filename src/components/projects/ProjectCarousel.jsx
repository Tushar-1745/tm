import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button } from '@mui/material';
import projects from './ProjectsData';
import ProjectCard from './ProjectCard';

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();

  const handlePrevClick = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    setCurrentIndex(newIndex);
    carouselRef.current.slideTo(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    carouselRef.current.slideTo(newIndex);
  };

  const items = projects.map((project) => <ProjectCard key={project.id} project={project} />);

  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div style={{height: '90vh'}}>
      <h1 style={{ fontSize: '60px', fontStyle: 'italic', textAlign: 'center' }}>Projects</h1>
      <div style={{ position: 'relative', paddingLeft: '90px', marginTop:'60px' }}>
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls  // Disable navigation arrows
          disableDotsControls      // Disable navigation dots
          currentIndex={currentIndex}
          ref={carouselRef}
        />
        {currentIndex !== 0 && <Button
          variant='contained'
          className='bg-white z-50'
          onClick={handlePrevClick}
          sx={{
            position: 'absolute',
            top: '40%',
            left: '0rem',
            transform: 'translateY(-50%) rotate(-90deg)',
            bgcolor: 'white',
          }}
          aria-label='previous'
        >
          <ArrowBackIosNewIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
        </Button>}
        {currentIndex !== items.length-3 && <Button
          variant='contained'
          className='bg-white z-50'
          onClick={handleNextClick}
          sx={{
            position: 'absolute',
            top: '40%',
            right: '0rem',
            transform: 'translateY(-50%) rotate(90deg)',
            bgcolor: 'white',
          }}
          aria-label='next'
        >
          <ArrowBackIosNewIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
        </Button>}
      </div>
    </div>
  );
};

export default ProjectCarousel;


