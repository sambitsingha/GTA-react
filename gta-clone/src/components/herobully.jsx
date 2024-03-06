import React, { Component } from "react";
import gtaV from "../images/gta-logo2.png";
import gtaOnline from "../images/gta-online.png";
class Hero extends Component {
	state = {};
	render() {
		return (
			<>
				<div className='bg-hero-pattern bg-cover bg-center h-screen px-16 py-4 text-white'>
					<div className='flex place-items-center'>
						<img src={gtaV} alt='' className='w-50' />
						<img src={gtaOnline} alt='' className='w-40 h-40' />
					</div>
					<div className='w-2/5'>
						<h1 className='text-4xl font-extrabold scale-y-200'>
							CHECK OUT THE LATEST RELEASES
						</h1>
						<h1 className='text-xl my-7 font-raleway'>
							Experience entertainment blockbusters, Grand Theft Auto V and GTA
							Online.
						</h1>
					</div>
					<div className='flex justify-between items-center w-5/12'>
						<button className=' w-72 h-16 border border-white rounded font-bold button font-agency text-2xl tracking-wide'>
							WATCH THE TRAILER
						</button>
						<button className=' w-48 h-16 border border-white rounded font-bold button font-agency text-2xl tracking-wide'>
							BUY NOW
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default Hero;
