import { EmblaOptionsType } from 'embla-carousel-react';
import React from 'react';

import CustomCarousel from './EmblaCarousel';

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const SliderSection: React.FC = () => {
	return (
		<section>
			<CustomCarousel slides={SLIDES} options={OPTIONS} />
		</section>
	);
};
export default SliderSection;
