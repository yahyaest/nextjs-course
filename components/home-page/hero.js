import Image from 'next/image'
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
    <div className={classes.image}>
     <Image
      src="/images/site/gintamaanime2017.jpg"
      alt="Gin-San"
      width={300}
      height={300}
     />
      </div>
      <h1>Hi, I am Gin San</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
