import classes from './SideBar.module.scss';
const SideBar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <div className={classes.icon}>
            <ion-icon name='bed'></ion-icon>
          </div>
          <span>hotel</span>
        </li>
        <li>
          <div className={classes.icon}>
            <ion-icon name='airplane'></ion-icon>
          </div>
          <span>flight</span>
        </li>
        <li>
          <div className={classes.icon}>
            <ion-icon name='car-sport'></ion-icon>
          </div>
          <span>car rental</span>
        </li>
        <li>
          <div className={classes.icon}>
            <ion-icon name='map-outline'></ion-icon>
          </div>
          <span>tours</span>
        </li>
      </ul>
      <p className={classes.legal}>© 2022 by Rasurv. All rights RASURVED.</p>
    </nav>
  );
};

export default SideBar;
