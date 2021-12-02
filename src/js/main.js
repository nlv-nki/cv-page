import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import backToTop from './modules/backToTop';
import Preloader from 'ninelines-preloader';

ieFix();
vhFix();
actualYear();

header.init();
lazyLoading.init();
backToTop.init();
Preloader.init('images/preloader.png')
	.then(() => {
		document.querySelector('.preloader img').classList.add('move-ne');
	})
	.then(() => {
		setTimeout(() => {
			document.querySelector('.preloader').style.display = 'none';
		}, 3000);
	});
