import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/brown.jpg'
          alt='An image showing Brown'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Brown</h1>
      <p>
        I blog about web development - especially fullstack frameworks and tools like
        NextJS, Laravel, React, NodeJS and the MERN stack.
      </p>
    </section>
  );
}

export default Hero;
