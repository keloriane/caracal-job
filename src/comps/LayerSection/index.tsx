import Image from 'next/image';
import React from 'react';

import Layer from './../../../public/images/layer.jpg';
const LayerSection: React.FC = () => {
	return (
		<section className={'mt-[100px] relative w-full '}>
			<Image src={Layer} alt={'patterns'} className={'absolute right-0 max-w-[80%] top-[-200px] h-[400px]'} />
		</section>
	);
};
export default LayerSection;
