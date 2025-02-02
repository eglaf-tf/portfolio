import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('eglaf.tf@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Akshit Thakur</p>
              <p className="grid-subtext">
                As an aspiring developer, I'm exploring the world of web development and AI, building dynamic and
                interactive projects. My focus is on creating robust, user-centric applications that leverage
                cutting-edge technologies. With expertise in full-stack development, I combine modern frontend
                frameworks like React and Next.js with powerful backend solutions and AI/ML tools to deliver seamless
                digital experiences. I'm particularly passionate about exploring the intersection of web technologies
                and artificial intelligence to build innovative solutions that make a meaningful impact.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/stack.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Experienced in multiple programming languages including C, C++, JavaScript, and Python. Proficient in
                web technologies such as HTML, CSS, Bootstrap, React.js, Next.js, Node.js, Express.js, and jQuery.
                Well-versed in database management using MongoDB, MySQL, and PostgreSQL. Skilled in version control
                systems like Git and GitHub, along with development tools such as Docker and Linux. Additionally,
                experienced with AI/ML tools including TensorFlow, Scikit-learn, Pandas, and NumPy for data analysis and
                machine learning applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">
                I'm based in Himachal Pradesh, India and open to remote work worldwide. I maintain flexible availability
                for meetings across all time zones and excel in asynchronous communication methods. My adaptable
                schedule allows me to seamlessly integrate with global teams while utilizing various remote
                collaboration tools.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I thrive on solving problems and bringing ideas to life through code. Programming isn't just a
                profession—it's a passion that drives me to explore new technologies, push boundaries, and continuously
                refine my skills. My journey in software development has been driven by curiosity and a desire to create
                meaningful solutions. From architecting scalable web applications to implementing AI algorithms, I'm
                constantly challenging myself to learn and grow. I believe in writing clean, efficient code and building
                intuitive user experiences that make a real difference. What excites me most is the opportunity to
                combine different technologies in creative ways - whether it's integrating machine learning models into
                web applications, optimizing database performance for better scalability, or exploring new frameworks to
                enhance user interfaces. Beyond just writing code, I'm passionate about understanding the underlying
                principles of software engineering and best practices. Through active engagement in the developer
                community, staying updated with the latest technological trends, and collaborating on innovative
                projects, I strive to push the boundaries of what's possible while making a positive impact through
                technology.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">eglaf.tf@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
