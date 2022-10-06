import classes from './Main.module.scss';
const Main = (props) => {
  return (
    <main className={`${classes.main} ${props.className}`}>Hotel view</main>
  );
};

export default Main;
