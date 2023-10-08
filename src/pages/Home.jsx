import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner'
import HouseList from '../components/HouseList'
import Offer from '../components/Offer'
import Testimonials from '../components/Testimonials'
import Subscribe  from '../components/Subscribe'

// import Footer from '../components/Footer'

import { RotatingTriangles } from 'react-loader-spinner';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      // After the operation is done, set isLoading to false e
      setIsLoading(false);
    }, 2000); 
  }, []);

  <RotatingTriangles
    visible={true}
    ariaLabel="rotating-triangels-loading"
    wrapperStyle={{}}
    wrapperClass="rotating-triangels-wrapper"
  />
  return (
    <section className='min-h-[1800px]'>
        {isLoading ? (
        // If isLoading is true, display a spinner
        <div className="flex justify-center items-center h-[100vh]">
          <RotatingTriangles colors={['#3938CD', '#3938CD', '#3938CD']}  height="120px" width="120px"/>
        </div>
      ) : (
        // If isLoading is false, display the actual content
        <>
          <Banner/>
          <HouseList />
          <Offer/>
          <Testimonials/>
          <Subscribe />
          {/* <Footer /> */}
        </>
      )}
    </section>
  )
}

export default Home