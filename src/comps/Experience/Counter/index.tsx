import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Counter({ value, direction = 'up' }: { value: number; direction?: 'up' | 'down' }) {
	const ref = useRef<HTMLSpanElement>(null);
	const motionValue = useMotionValue(direction === 'down' ? value : 0);
	const springValue = useSpring(motionValue, {
		damping: 100,
		stiffness: 100,
	});
	const isInView = useInView(ref, { once: false, margin: '-100px' });

	useEffect(() => {
		if (isInView) {
			motionValue.set(direction === 'down' ? 0 : value);
		}
	}, [motionValue, isInView]);

	useEffect(
		() =>
			springValue.on('change', (latest) => {
				if (ref.current) {
					ref.current.textContent = Intl.NumberFormat('en-EU').format(Math.round(latest));
				}
			}),
		[springValue]
	);

	return <span ref={ref} />;
}
