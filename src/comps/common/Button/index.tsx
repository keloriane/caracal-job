import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonType = {
	text: string;
	link: string;
	variant: 'light' | 'dark';
};

const Button: React.FC<ButtonType> = ({ variant, text, link }) => {
	return (
		<div>
			<button
				className={twMerge(
					'flex items-center justify-center py-[22px] px-[36px] text-[12px] uppercase rounded-full',
					variant === 'light' ? 'bg-white border-cLightBlue border border-solid text-cBlue' : 'bg-cLightBlue text-white'
				)}
			>
				<Link href="#contact" className={'whitespace-nowrap'}>
					{text}
				</Link>
			</button>
		</div>
	);
};

export default Button;
