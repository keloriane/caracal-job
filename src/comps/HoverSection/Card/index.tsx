import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export type CardType = {
	ctaText: string;
	imageCta: StaticImageData;
	alt: string;
	color: string;
};

const Card: React.FC<CardType> = ({ ctaText, imageCta, alt, color }) => {
	return (
		<motion.div
			className={twMerge(
				'w-[270px] px-[15px] py-[20px] gap-[17px] flex-row  flex items-center rounded-[10px] bg-[#05194C] lg:flex-col lg:pl-[90px] pr-[79.507px] pt-[49.917px] pb-[52.088px] lg:hover:transition-all lg:hover:duration-[0.2s] lg:hover:scale-[1.1]',
				`hover:bg-[${color}]`
			)}
		>
			<motion.div className="flex">
				<Image src={imageCta} alt={alt} width={100} height={100} />
			</motion.div>
			<motion.div className="flex">
				<p>{ctaText}</p>
			</motion.div>
			<motion.div className={`stroke-[${color}]`}>
				<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12.7925 18.4998H23.7116M23.7116 18.4998L18.252 13.0403M23.7116 18.4998L18.252 23.9594"
						stroke={color}
						strokeWidth="0.779936"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<rect x="0.456302" y="0.704105" width="35.5916" height="35.5916" rx="17.7958" stroke="white" strokeOpacity="0.2" strokeWidth="0.912605" />
				</svg>
			</motion.div>
		</motion.div>
	);
};

export default Card;
