import classes from './Main.module.scss';
import Preview from './preview/Preview';
const Main = () => {
  return (
    <main className={classes.main}>
      <Preview />
    </main>
  );
};

export default Main;
