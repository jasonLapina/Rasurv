import Detail from './detail/Detail';
import classes from './Main.module.scss';
import Preview from './preview/Preview';
import Reviews from './reviews/Reviews';
const Main = () => {
  return (
    <main className={classes.main}>
      <Preview />
      <div className={classes.details}>
        <Detail />
        <Reviews />
      </div>
    </main>
  );
};

export default Main;
