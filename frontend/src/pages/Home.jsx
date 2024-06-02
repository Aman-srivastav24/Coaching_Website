import React, { useState , useEffect} from 'react';
// import { Link } from 'react-router-dom';

import { useSpring, animated, config } from 'react-spring';
// import Services from './Services';
// import ContactForm from './ContactForm';
// import Work from './Work';
// import Testmonial from './Testmonial';

const textItems = [
  'Affordable Price',
  'Great Mentor',
  'Doubt Classes',
];
const Home = () => {
  const [index, setIndex] = useState(0);

  const textAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    reset: true,
    onRest: () => {
      // Increase the index after the animation completes
      setIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    },
    config: config.molasses, 
  });
  useEffect(() => {

    const loopInterval = setInterval(() => {
      textAnimation.reset();
    }, 5000); 
    return () => clearInterval(loopInterval);
  }, [textAnimation]);
  return (
    <div >
      <section className="z-0 bg-gray-200 h-[50vh] bg-hero-pattern bg-cover bg-no-repeat bg-center mt-4 rounded-lg  flex-col justify-center items-center md:h-[60vh]">
        <div className="container mx-auto text-white  text-center p-8 backdrop-blur-[1px] bg-black/10 w-auto md:w-[80%] rounded-lg mt-10 flex flex-col items-center justify-center" >
          <h1 className="text-3xl   font-bold mb-4 lg:text-6xl">Sergul Computer Education  </h1>
          <p className="text-[24px] md:text-[30px] mb-6 font-bold text-gray-200  font-mono  text-slide-container Shadow rounded-lg p-4">
          <animated.div style={textAnimation}>{textItems[index]}</animated.div>
          </p>

          {/* <Link to="/services"> */}
            <button className="bg-orange-500 text-black py-2 px-4 rounded-full md:w-[30%] transition duration-300 ease-in-out transform mt-6  hover:scale-105">
              Start your journey
            </button>
          {/* </Link> */}

        </div>

      </section>


     

   
    </div>
  );
};

export default Home;