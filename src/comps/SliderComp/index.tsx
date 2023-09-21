import { EmblaOptionsType } from 'embla-carousel-react';
import React from 'react';

import Col from '../Layout/Col';
import Container from '../Layout/Container';
import CardSlider from './CardSlider';

const OPTIONS: EmblaOptionsType = { startIndex: 3, loop: false, dragFree: true, inViewThreshold: 0.5 };
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const SliderSection: React.FC = () => {
	return (
		<section className={'bg-cBlue mt-[255px]'}>
			<Container className={'pt-[250px]'}>
				<Col colStart={[3, 3]} colEnd={[26, 13]}>
					<div className="subtitile flex items-center gap-[17px]  ">
						<h2 className={'text-cLightBlue uppercase'}>Tortor</h2>
					</div>
					<h3 className={'text-white font-GTHaptik'}>
						Ultrices neque, vitae <br /> legestas pellentesque mattis
					</h3>
				</Col>
				<Col colStart={[3, 21]} colEnd={[26, 26]}>
					<div className={'flex items-center'}>
						<p className={'text-white underline decoration-cLightBlue underline-offset-[8px]'}>Sed neque cursus</p>
					</div>
				</Col>
			</Container>
			<div className="mt-[46px]">
				<CardSlider slides={SLIDES} options={OPTIONS} />
			</div>
		</section>
	);
};
export default SliderSection;
