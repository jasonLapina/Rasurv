import classes from './Detail.module.scss';
import chaeyoung from '../../../assets/customers/chaeyoung.webp';
import sana from '../../../assets/customers/sana.webp';
import mina from '../../../assets/customers/mina.webp';
import nayeon from '../../../assets/customers/nayeon.webp';
const Detail = () => {
  const features = [
    'Close to the mall',
    'Free airport shuttle',
    'Air conditioning and heating',
    'We speak all languages',
    'Breakfast included',
    'Free wifi in all rooms',
    'Pets allowed',
    'Perfect for families',
  ];

  const customers = [chaeyoung, sana, mina, nayeon];
  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          cumque dicta. Sequi laborum inventore accusantium ex exercitationem
          sunt quasi doloremque veniam quas cum corrupti accusamus, deserunt
          perspiciatis ipsa, quod illum. impedit a fugit, quisquam, voluptates
          dolores nobis voluptate doloremque quae!
        </p>

        <p>
          r sit amet consectetur adipisicing elit. Explicabo, cumque dicta.
          Sequi laborum inventore accus
        </p>
      </div>
      <div className={classes.features}>
        <ul>
          {features.map((feature, i) => {
            return (
              <li key={i}>
                <div className={classes.check} key={i + 1}>
                  <ion-icon key={i + 2} name='checkmark-outline'></ion-icon>
                </div>{' '}
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.recommendations}>
        <p>Chaeyoung and 3 other users recommend this hotel.</p>
        <div className={classes.customers}>
          {customers.map((idol, i) => {
            return <img key={i} src={idol} alt='customer' />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
