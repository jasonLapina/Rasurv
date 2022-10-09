import classes from './Booking.module.scss';
const Booking = () => {
  return (
    <div className={classes.booking}>
      <h2>Good news! There are 9 rooms left for this hotel!</h2>
      <button className={classes.btn}>
        <span className={classes['btn--book']}>Book now</span>
        <span className={classes['btn--rooms']}>Only 9 rooms left</span>
      </button>
    </div>
  );
};

export default Booking;
