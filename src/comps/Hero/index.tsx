import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '../common/Button';
import Col from '../Layout/Col';
import Container from '../Layout/Container';
import heroImage from './../../../public/images/Hero.jpg';
import timeline from './../../../public/images/timeline.svg';

const Hero: React.FC = () => {
	const text = 'Every day, everywhere,\n you deserve to breathe clean air';
	return (
		<header className="h-screen w-screen relative max-h-[850px] flex items-center sm:items-center md:items-end pb-[82px]">
			<div className="w-full h-full absolute top-0 left-0 -z-1 bg-cGradient"></div>
			<Image src={heroImage} alt={'hangar hero image'} fill={true} className={'absolute top-0 left-0 -z-10'} layout={'fill'} objectFit={'cover'} objectPosition={'center'} />
			<div className={'hidden md:flex flex-col absolute right-0 top-0  items-end'}>
				<Image src={timeline} alt={'timeline company'} />
				<div className={'w-[153px] text-white absolute right-[15%] top-[80%]'}>
					<p>Every day we spend 90% of our time indoor.</p>
					<Link href={'#'} className={'mt-[5px] text-white underline decoration-cLightBlue underline-offset-[8px] font-GTHaptik uppercase font-[400] '}>
						En savoir plus
					</Link>
				</div>
			</div>
			<Container>
				<Col className="" colStart={[2, 3]} colEnd={[25, null, 20, null, 20]}>
					<div className="relative flex flex-col justify-between h-[428px] sm:h-[240px] md:h-[240px]">
						<div>
							<h1 className={'font-GTHaptik text-white text-[32px] lg:text-[64px] '}>{text}</h1>
						</div>
						<div className="mt-[20px]">
							<Button text={'Decouvrez Nos Expertises'} link={'#'} variant={'dark'} />
						</div>
					</div>
				</Col>
			</Container>
		</header>
	);
};
export default Hero;
