import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import cardHeader from './../../../../public/images/cardHeader.png';
import globe from './../../../../public/images/globe.png';

const Card = () => {
	return (
		<div className={'w-[254px] md:w-[387px] bg-white h-[400px] flex flex-col rounded-2xl'}>
			<div>
				<Image src={cardHeader} alt={'immo card '} />
			</div>
			<div className={'flex items-center'}>
				<Image src={globe} alt={'globe'} />
				<p className={'text-cLightBlue'}>Filtration</p>
				<hr className={'w-[12px] h-[1px] block'} />
				<p className={'text-[black] opacity-50'}>
					26.5.2 <br />
					022
				</p>
			</div>
			<div className={'text-[13px] md:text-[20px]'}>
				<h5>At lacus porttitor orci cum eu lacus sit</h5>
			</div>
			<div>
				<p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
			</div>
			<div className={'flex justify-end'}>
				<Link className={'underline'} href="">
					Lire plus
				</Link>
			</div>
		</div>
	);
};

export default Card;
