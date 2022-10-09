import classes from './Header.module.scss';
import logo from '../../assets/Rasurv-logo.webp';
import dp from '../../assets/profile-pic.webp';

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt='rasurv logo' />
      <form className={classes.search} action='#'>
        <input type='text' placeholder='Search hotels' />
        <button>
          <ion-icon name='search'></ion-icon>
        </button>
      </form>
      <nav className={classes.nav}>
        <div className={`${classes.icon} ${classes['icon--bookmark']}`}>
          <ion-icon name='bookmark'></ion-icon>
        </div>
        <div className={`${classes.icon} ${classes['icon--chat']}`}>
          <ion-icon name='chatbubbles'></ion-icon>
        </div>

        <figure className={classes.user}>
          <img src={dp} alt='user' />
          <figcaption>Jason</figcaption>
        </figure>
      </nav>
    </header>
  );
};

export default Header;
