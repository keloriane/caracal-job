import React from 'react';

import AnimatedText from '../common/AnimatedText';
import Button from '../common/Button';
import Col from '../Layout/Col';
import Container from '../Layout/Container';
import Counter from './Counter';
import CTA from "../common/CTA";

const Experience: React.FC = () => {
	return (
		<section id={'experiencemb'} className={'mb-[206px]'}>
			<Container className={'mt-[40px] lg:mt-[80px] '}>
				<Col colStart={[2, null, null, 3]} colEnd={[25, null, null, 13]}>
					<div className="flex flex-col justify-between">
						<div className="subtitile flex items-center gap-[17px]  ">
							<h2 className={'text-cLightBlue uppercase'}>Tortor</h2>
						</div>
						<AnimatedText
							className={'font-GTHaptik font-medium'}
							text={"Avec plus de 55 ans d'expérience, nous sommes le garant d'un air plus propre."}
							splitBy={'phrase'}
							as={'h3'}
							gap={'5px'}
							duration={0.5}
						/>
					</div>
					<div className="flex flex-col justify-between mt-[45px] sm:mt-[78px]">
						<div className="grid grid-cols-[2fr_3fr] items-center gap-[24px] md:gap-[55px]">
							<div className={'text-[50px]  flex flex-col'}>
								<div>
									<Counter value={55} direction={'up'} />+
								</div>
								<hr className={'h-[4px] max-w-[87px]  bg-cLightBlue'} />
							</div>
							<AnimatedText
								text={'Tortor parturient justo, scelerisque auctor pellentesque laoreet tempus.'}
								splitBy={'phrase'}
								as={'p'}
								gap={'2px'}
								duration={1}
								className={'text-[8px] md:text-[14px] text-cText'}
							/>
						</div>
						<div className="grid grid-cols-[2fr_3fr] items-center gap-[24px] md:gap-[55px]">
							<div className={'text-[50px]  flex flex-col'}>
								<div>
									<Counter value={1255} direction={'up'} />
								</div>
								<hr className={'h-[4px] w-full block max-w-[87px] bg-cLightBlue'} />
							</div>
							<AnimatedText
								text={'Tortor parturient justo, scelerisque auctor pellentesque laoreet tempus.'}
								splitBy={'phrase'}
								as={'p'}
								gap={'2px'}
								duration={1}
								className={'text-cText'}
							/>
						</div>
					</div>
				</Col>
			</Container>
			<Container>
				<Col colStart={[3, 3, 3, 13]} colEnd={[25, 25, 26]}>
					<div className={'max-w-[498px] mt-[55px]'}>
						<div>
							<AnimatedText
								text={"Spécialisé dans la filtration de l'air, nous proposons des solutions technologiques avancées pour tous les secteurs d'activité."}
								splitBy={'phrase'}
								as={'h4'}
								gap={'5px'}
								duration={1}
							/>
						</div>
						<div className={'mt-[26px]'}>
							<AnimatedText
								text={
									'Tortor parturient justo, scelerisque auctor pellentesque laoreet tempus. Venenatis lobortis adipiscing proin tortor ullamcorper commodo, pulvinar sed cras. Aliquam id\n' +
									'\t\t\t\t\t\t\t\teuismod eu vestibulum duis enim laoreet platea. Sodales eu gravida commodo, amet sit.'
								}
								splitBy={'phrase'}
								as={'p'}
								gap={'2px'}
								duration={1}
								className={'text-cText'}
							/>
						</div>
						<div className={'mt-[38px] md:mt-[50px]] flex items-center gap-[46px]'}>
							<Button text={'Notre Histoire'} link={'#'} variant={'light'} />
							<div className={'whitespace-nowrap hidden md:block'}>
								<CTA text={'Notre ADN'} />
							</div>
						</div>
					</div>
				</Col>
			</Container>
		</section>
	);
};

export default Experience;
