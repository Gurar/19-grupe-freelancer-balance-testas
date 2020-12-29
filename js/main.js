import {MetuBalansas} from './components/MetuBalansas.js';
import {account} from './data.js';
import {meniesiai} from './menesiai.js';


const params = {
    selector: '.table-content',
    data: account,
    months: meniesiai
}

const metuBalanasas = new MetuBalansas(params);

metuBalanasas.init();
