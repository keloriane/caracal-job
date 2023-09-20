import type { NextPage } from 'next';
import Head from 'next/head';

import Menu from '../comps/common/Menu';
import SliderSection from '../comps/common/SliderSection';
import Experience from '../comps/Experience';
import Hero from '../comps/Hero';
import HoverSection from '../comps/HoverSection';
import LayoutTor from "../comps/LayoutTor";
import SliderComp from "../comps/SliderComp";
import LayerSection from "../comps/LayerSection";

const Page: NextPage = () => {
	return (
		<div className="">
			<Head>
				<title>Caracal Agency</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Menu />

			<Hero />
			<HoverSection />
			<Experience />
			<LayoutTor />
			<LayerSection />
			<SliderComp />
		</div>
	);
};

export default Page;
