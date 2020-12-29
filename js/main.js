import {MetuBalansas} from './components/MetuBalansas.js';
import {account} from './data.js';
import {meniesiai} from './menesiai.js';


const params = {
    selectorTable: '.table-content',
    selectorFooter: '.table-footer',
    data: account,
    months: meniesiai
}

const metuBalanasas = new MetuBalansas(params);

metuBalanasas.init();
