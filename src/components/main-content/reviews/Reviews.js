import classes from './Reviews.module.scss';
import dahyun from '../../../assets/customers/dahyun.webp';
import tzuyu from '../../../assets/customers/tzuyu.webp';
const Reviews = () => {
  const reviews = [
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.',
      user: 'Kim Da-hyun',
      image: dahyun,
      date: 'Oct 28 2022',
      rating: '9',
    },
    {
      review:
        'meroL muspi rolod tis tema, rutetcesnoc gnicisipida tile. aguF euqmerolod otcetihcra atcid imina, matot, euqati aiciffo xe.',
      user: 'Chou Tzu-yu',
      image: tzuyu,
      date: 'Oct 28 2022',
      rating: '10',
    },
  ];
  return (
    <div className={classes.container}>
      {reviews.map((review, i) => {
        return (
          <div key={i} className={classes.card}>
            <p key={i + 2} className={classes.review}>
              {review.review}
            </p>
            <div key={i + 3} className={classes['review__details']}>
              <img key={i + 4} src={review.image} alt='user profile' />
              <div className={classes['review__details--text']} key={i + 5}>
                <p className={classes.name} key={i + 6}>
                  {review.user}
                </p>
                <p className={classes.date} key={i + 7}>
                  {review.date}
                </p>
              </div>
              <span key={i + 8}>{review.rating}</span>
            </div>
          </div>
        );
      })}
      <a className={classes.anchor} href='/'>
        Show all &rarr;
      </a>
    </div>
  );
};

export default Reviews;
