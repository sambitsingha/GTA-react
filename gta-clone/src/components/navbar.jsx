import React, { Component } from "react";
import logo from "../images/company-logo.jpg";
import gtaLogo from "../images/gta-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
class Navbar extends Component {
	state = {};
	render() {
		return (
			<>
				<nav className=' bg-black text-white w-full h-20 py-5 px-16 flex justify-center items-center m-auto'>
					<img src={logo} alt='' className='w-12 h-8' id='img-1' />
					<div className='bg-gray-400 w-[0.5px] h-9'></div>
					<img src={gtaLogo} alt='' className='mx-3' id='img-2' />
					<ul className='flex justify-around items-center w-screen ul'>
						<a href='#'>
							<li className='flex items-center h-20 border-b-[3px] font-bold'>
								Overview
							</li>
						</a>
						<a href='#'>
							<li className='flex items-center h-20 navlink'>GTA Online</li>
						</a>
						<a href='#'>
							<li className='flex items-center h-20 navlink'>Story</li>
						</a>
						<a href='#'>
							<li className='flex items-center h-20 navlink'>GTA+</li>
						</a>
						<a href='#'>
							<li className='flex items-center h-20 navlink'>Community</li>
						</a>
						<a href='#'>
							<li className='flex items-center h-20 navlink'>Support</li>
						</a>
					</ul>
					<button className=' w-48 h-10 border border-white rounded font-bold button'>
						BUY NOW
					</button>
					<FontAwesomeIcon
						icon={faSearch}
						style={{ color: "#ffffff" }}
						className='mx-5 text-2xl icon'
					/>
				</nav>
			</>
		);
	}
}

export default Navbar;
