import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
	text: string;
	splitBy: 'letter' | 'word' | 'phrase';
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
	gap: string;
	duration: number;
	className?: string;
	stagger?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, splitBy, as, gap, duration, className, stagger }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start((i) => ({
				opacity: 1,
				y: 0,
				transition: {
					delay: i * (stagger || 0.1),
					duration: duration,
					ease: [0.215, 0.61, 0.355, 1],
				},
			}));
		}
	}, [inView, controls, duration, stagger]);

	const createElement = (str: string, index: number) => {
		const MotionTag = motion[as];

		return (
			<span key={index} style={{ overflow: 'hidden' }}>
				<MotionTag initial={{ opacity: 0, y: 100 }} custom={index} animate={controls}>
					{str}
				</MotionTag>
				{splitBy !== 'letter' && ' '}
			</span>
		);
	};

	let splitText: string[];

	if (splitBy === 'letter') {
		splitText = Array.from(text);
	} else if (splitBy === 'word') {
		splitText = text.split(' ');
	} else if (splitBy === 'phrase') {
		splitText = text.split('\n');
	} else {
		splitText = text.split('. ');
	}

	return (
		<div
			ref={ref}
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: gap,
			}}
			className={className}
		>
			{splitText.map((str, index) => createElement(str, index))}
		</div>
	);
};

export default AnimatedText;
