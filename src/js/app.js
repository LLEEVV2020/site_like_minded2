import '../../node_modules/@popperjs/core/dist/umd/popper.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.esm.js';

import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// core version + navigation, pagination modules:
import Swiper, {
	Navigation,
	Pagination
} from 'swiper';

// init Swiper:
const swiper = new Swiper();