import hotel1 from '../../../assets/hotel-1.webp';
import hotel2 from '../../../assets/hotel-2.webp';
import hotel3 from '../../../assets/hotel-3.webp';
import classes from './Preview.module.scss';
const Preview = () => {
  const hotelImages = [hotel1, hotel2, hotel3];
  return (
    <div className={classes.preview}>
      <div className={classes.gallery}>
        {hotelImages.map((hotel, i) => {
          return (
            <figure key={i}>
              <img key={i + 1} src={hotel} alt='nice hotel' />
            </figure>
          );
        })}
      </div>
      <div className={classes.overview}>
        <h1>PASEO PREMIERE HOTEL</h1>
        <div className={classes['overview__stars']}>
          {Array.from({ length: 5 }).map((i) => {
            return (
              <div key={i} className={classes.icon}>
                <ion-icon key={i + 1} name='star-sharp' />
              </div>
            );
          })}
        </div>
        <div className={classes.location}>
          <div className={classes.icon}>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://www.google.com/maps/place/Paseo+Premiere+Hotel/@14.2476058,121.0643477,17z/data=!3m1!4b1!4m8!3m7!1s0x33bd7d47ed2ce561:0xfa52265b03a6d296!5m2!4m1!1i2!8m2!3d14.2475637!4d121.0663727'
            >
              <ion-icon name='location-sharp'></ion-icon>
            </a>
          </div>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.google.com/maps/place/Paseo+Premiere+Hotel/@14.2476058,121.0643477,17z/data=!3m1!4b1!4m8!3m7!1s0x33bd7d47ed2ce561:0xfa52265b03a6d296!5m2!4m1!1i2!8m2!3d14.2475637!4d121.0663727'
          >
            <span>Santa Rosa, Laguna</span>
          </a>
        </div>
        <div className={classes.rating}>
          <span className={classes['rating--avg']}>9.6</span>
          <span className={classes['rating--population']}>420 votes</span>
        </div>
      </div>
    </div>
  );
};

export default Preview;
