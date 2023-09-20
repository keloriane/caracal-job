import React from 'react';

type LayoutItemProps = {
	text: string;
};
const LayoutItem: React.FC<LayoutItemProps> = ({ text }) => {
	return (
		<div className={' font-GTHaptik pl-[30px] pr-[15px] pt-6 pb-6 border border-[#AECBE3] rounded-full flex items-center justify-evenly max-w-[177px]'}>
			<div>
				<p className={'leading-4 tracking-[1.6px] uppercase'}> {text} </p>
			</div>
			<div>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>
		</div>
	);
};
export default LayoutItem;
