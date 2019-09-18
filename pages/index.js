import ContactForm from "../components/ContactForm";
import Logo from "../components/icons/Logo";

import css from "../style.scss";

const Home = () => {
  return (
    <div className={css.pageRoot}>
      <div>
        {/* <Logo /> */}
        <img src="/static/tangerine2.png" height="50px" />
      </div>

      <div className={css.heroSection}>
        <h1 className={css.hero}>Coming soon.</h1>
        <p className={css.introText}>
          Build and protect wealth with Tangerine and secure your financial future. 
          Register below for early access and bonuses.
        </p>
      </div>
      <ContactForm />
    </div>
  )
}

export default Home;
