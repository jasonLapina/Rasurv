import classes from './SideBar.module.scss';
const SideBar = (props) => {
  return <nav className={`${classes.nav} ${props.className}`}>navigation</nav>;
};

export default SideBar;
