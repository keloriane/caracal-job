import Link from 'next/link';
import React from 'react';

type CTAProps = {
	text: string;
};
const CTA: React.FC<CTAProps> = ({ text }) => {
	return (
		<div>
			<Link href={'#'} className={'text-black underline decoration-cLightBlue underline-offset-[8px] font-GTHaptik uppercase font-[400] '}>
				{text}
			</Link>
		</div>
	);
};

export default CTA;
