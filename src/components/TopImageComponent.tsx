import {Image} from 'native-base';

const beTheHero = require('../../public/undraw_be_the_hero_ssr2.svg') as string;

const TopImageComponent = () => {
  return <Image source={{uri: beTheHero}} alt="Be the hero image" />;
};

export default TopImageComponent;
