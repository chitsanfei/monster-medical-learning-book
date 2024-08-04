import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: JSX.Element;
  Img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="homepage.features.header.left">易用</Translate>,
    Img: require('@site/static/img/mainpage_easytouse.jpg').default,
    description: (
      <Translate id="homepage.features.description.left">
        妖怪们的医学书中没有教科书中多余的描述和解释，这意味着这是一本最快复习知识点的电子书。
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.features.header.mid">专业</Translate>,
    Img: require('@site/static/img/mainpage_professional.jpg').default,
    description: (
      <Translate id="homepage.features.description.mid">
        妖怪们的医学书由现有的医学院学生审核，并被尽可能的确保医学知识点的更新和有效性。
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.features.header.right">下一代</Translate>,
    Img: require('@site/static/img/mainpage_nextgeneration.jpg').default,
    description: (
      <Translate id="homepage.features.description.right">
        我们以下一代培养为目标，尽可能破除知识壁垒，让更多的学生接触到新内容。
      </Translate>
    ),
  },
];

function Feature({title, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureJpg} role="img"  alt={"Picture"}/>
      </div>
        <br />
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
