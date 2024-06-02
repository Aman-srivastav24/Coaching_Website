import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import graphic from '../assets/graphic.png'
import animation from '../assets/animation.jpg'
import seo from '../assets/web-programming.png'
import video from '../assets/video.png'
// import { Link } from 'react-router-dom';


const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView])

  return (
    <section className="bg-white py-16 " >
      <div className="container mx-auto " >
        <h2 className="text-3xl font-bold mb-8 
        text-green-500
        bg-[#1c7689] rounded-md p-2 " >Courses</h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-auto place-items-center" ref={ref} 
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: .75, delay: .25 }}
        >
          {/* Add individual service items */}

          {/* <Link to="#"> */}
            <motion.div className="md:w-[400px] w-[100%] flex md:flex-col rounded-md border items-center bg-green-200 text-center transition duration-500 ease-in-out transform hover:bg-gradient-to-r from-green-500 to-green-300 hover:scale-105 shadow-2xl">
              <img
                src={graphic}
                alt="Laptop"
                class="md:h-[200px] md:w-[200px] rounded-[20px] h-[120px] w-[120px] object-cover p-4"
              />
              <div class="p-4 w-[90%]">
                <h1 class="text-lg font-semibold">Graphic Design</h1>
                <p class="mt-3 md:text-[18px] text-sm  text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus voluptatem ad nostrum a. Nemo quasi eius, saepe hic aliquam consequuntur? Soluta fugit excepturi illum eum ad sit fuga, neque quaerat.
                </p>

              </div>
            </motion.div>
          {/* </Link> */}

          {/* <Link to="#"> */}
            <div class="md:w-[400px] w-auto flex flex-row-reverse md:flex-col rounded-md border bg-green-200  items-center text-center transition duration-500 ease-in-out transform hover:bg-gradient-to-r from-green-300 to-green-500 hover:scale-105 shadow-2xl">
              <img
                src={video}
                alt="Laptop"
                class="md:h-[200px] md:w-[200px] rounded-[20px] h-[120px] w-[120px] object-cover p-4 "
              />
              <div class="p-4 w-[90%]">
                <h1 class="text-lg font-semibold">Video Editing</h1>
                <p class="mt-3 md:text-[18px] text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut harum ipsa autem, quod nulla eveniet animi, id iste dignissimos nostrum, accusantium debitis ut.
                </p>

              </div>
            </div>
          {/* </Link> */}

          {/* <Link to="#"> */}
            <div class="md:w-[400px] w-[100%] flex md:flex-col rounded-md border items-center text-center transition duration-500 ease-in-out transform hover:bg-gradient-to-r from-green-500 to-green-300 hover:scale-105 bg-green-200 shadow-2xl ">
              <img
                src={animation}
                alt="Laptop"
                class="md:h-[200px] md:w-[200px] rounded-[20px] h-[120px] w-[120px] object-cover p-4"
              />
              <div class="p-4 w-[90%]">
                <h1 class="text-lg font-semibold">Animation</h1>
                <p class="mt-3 md:text-[18px] text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo voluptatem commodi quasi maxime, sit magnam a veritatis consectetur earum illo animi ipsam cumque?
                </p>

              </div>
            </div>
          {/* </Link>
          <Link to="#"> */}
            <div class="md:w-[400px] w-[100%] flex md:flex-col rounded-md border items-center text-center transition duration-500 ease-in-out transform hover:bg-gradient-to-r from-green-500 to-green-300 hover:scale-105 bg-green-200 shadow-2xl ">
              <img
                src={seo}
                alt="Laptop"
                class="md:h-[200px] md:w-[200px] rounded-[20px] h-[120px] w-[120px] object-cover p-4"
              />
              <div class="p-4 w-[90%]">
                <h1 class="text-lg font-semibold">Web Design</h1>
                <p class="mt-3 md:text-[18px] text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo voluptatem commodi quasi maxime, sit magnam a veritatis consectetur earum illo animi ipsam cumque?
                </p>

              </div>
            </div>
          {/* </Link> */}



        </motion.div>
      </div>

    </section>

  );
};

export default Courses;