import './index.css';
import numeral from 'numeral';

const courseval = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseval} for this awsome course!`);
