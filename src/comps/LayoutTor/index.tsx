import React from 'react';

import Col from '../Layout/Col';
import Container from '../Layout/Container';
import LayoutItem from './Item';

const LayoutTor: React.FC = () => {
	return (
		<section id={'tortor'} className={'mb-[270px]'}>
			<Container>
				<Col colStart={[3, 3]} colEnd={[26, 11]}>
					<div className="subtitile flex items-center gap-[17px]  ">
						<h2 className={'text-cLightBlue uppercase'}>Tortor</h2>
					</div>
					<h3 className={'font-medium text-[20px] md:text-[40px]'}>Sit urna vehicula laoreet maecenas urna sed sit.</h3>
					<div className="flex flex-col gap-[16px]">
						<div className={'mt-[18px] flex gap-[15px] md:gap-[51px] justify-start flex-wrap'}>
							<LayoutItem text={'ISO 16890'} />
							<LayoutItem text={'EUROVENT'} />
						</div>
						<div className={' mt-[18px] flex gap-[51px] justify-start md:justify-end flex-wrap'}>
							<LayoutItem text={'ISO 16890'} />
							<LayoutItem text={'EUROVENT'} />
						</div>
						<div className={'mt-[18px] flex gap-[51px] justify-start flex-wrap'}>
							<LayoutItem text={'ISO 16890'} />
							<LayoutItem text={'EUROVENT'} />
						</div>
					</div>
				</Col>
				<Col colStart={[3, 16]} colEnd={[26, 24]}>
					<div className={'flex justify-center flex-col gap-[32px]'}>
						<hr className={'w-[80px] h-[4px] block bg-cLightBlue mb-[6px]'} />
						<div>
							<h4 className={' font-medium font-inter'}>Egestas gravida fringilla ipsum feugiat elementum odio sed. Et justo, tempus nisi elit, eu consectetur.</h4>
						</div>
						<div>
							<p>
								Urna tellus nisi cras cras habitasse sagittis, arcu adipiscing velit. Ultricies mi elementum etiam ridiculus pharetra. Accumsan eu eget lectus risus tellus eu. Aliquam
								ornare eleifend eget orci. Facilisi cursus urna aliquam tempus, egestas sit. Luctus lacus lacus quam augue sed egestas ac venenatis.
							</p>
						</div>
					</div>
				</Col>
			</Container>
		</section>
	);
};

export default LayoutTor;
