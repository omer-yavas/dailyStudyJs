console.log('importing module');
//import { a } from './export.js';

import * as All from './export.js';
console.log(All.a);

console.log(All.multiply(4, 5));
