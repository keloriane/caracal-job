import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import arrowCta from '../../../../public/images/arrow.svg';
import { CardType } from '../../HoverSection/Card';

const CardXl: React.FC<CardType> = ({ ctaText, imageCta, alt }) => {
	return (
		<motion.div className="w-[270px] px-[15px] py-[20px] gap-[17px] flex-row bg-cBlue flex items-center">
			<motion.div className="flex" initial={{ order: 1 }}>
				<Image src={imageCta} alt={alt} width={100} height={100} />
			</motion.div>
			<motion.div className="flex" initial={{ order: 2 }}>
				<p>{ctaText}</p>
			</motion.div>
			<motion.div className="cta-arrow" initial={{ order: 3 }}>
				<Image src={arrowCta} alt={alt} width={50} height={50} />
			</motion.div>
		</motion.div>
	);
};
export default CardXl;
