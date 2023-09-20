import React from 'react';

import Col from '../Layout/Col';
import Container from '../Layout/Container';
import lighting from './../../../public/images/lighting.svg';
import mattress from './../../../public/images/matrass.svg';
import tent from './../../../public/images/tent.svg';
import Card from './Card';

const cards = [
	{
		color: '#F2BE00',
		title: 'Filtration',
		image: mattress,
		alt: 'mattress',
	},
	{
		color: '#1EA5AA',
		title: 'Filtration',
		image: tent,
		alt: 'mattress',
	},
	{
		color: '#267EE4',
		title: 'Filtration',
		image: lighting,
		alt: 'mattress',
	},
];

const HoverSection: React.FC = () => {
	return (
		<section className={' pt-[43px] pb-[80px] w-screen max-h-[687px] h-full  bg-cBlue text-white relative'}>
			<Container>
				<Col colStart={3} colEnd={16}>
					<div className={'hidden md:flex flex-col'}>
						<div className="subtitile flex items-center gap-[17px] ml-[-55px] ">
							<hr className={'w-[40px] h-[1px]'} /> <h2 className={'text-cLightBlue uppercase'}>Tortor</h2>
						</div>
						<div className="titleContainer">
							<h3>Partout, au quotidien,vous méritez de respirer un air purifié.</h3>
						</div>
					</div>
				</Col>
			</Container>
			<Container>
				<Col colStart={2} colEnd={25}>
					<div className="flex flex-col md:flex-row justify-center items-center mt-[37px] gap-[12px] lg:gap-[25px]">
						{cards.map((card, index) => (
							<Card key={index} ctaText={card.title} imageCta={card.image} alt={card.alt} color={card.color} />
						))}
					</div>
				</Col>
			</Container>
		</section>
	);
};
export default HoverSection;
