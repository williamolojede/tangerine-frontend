import ContactForm from "../components/ContactForm";
import Logo from "../components/icons/Logo";

import css from "../style.scss";

const Home = () => {
  return (
    <div className={css.pageRoot}>
      <div>
        <Logo />
      </div>

      <div>
        <p>Coming soon.</p>
        <p>
          Build and protect wealth with Tangerine and secure your financial future. 
          Register below for early access and bonuses.
        </p>
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Home;
