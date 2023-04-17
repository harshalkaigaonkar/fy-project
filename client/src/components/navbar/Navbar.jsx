import React from 'react';
import './navbar.css';

const NavLinks = () => (
	<React.Fragment>
		<div style={{ display: 'flex', gap: '10px' }}>
			<a href="/login">Login</a>
			<p style={{ maginLeft: '8px' }}><a href="/dashboard">Dashboard</a></p>
		</div>
	</React.Fragment>
);

const Navbar = () => {
	return (
		<div className="landing-navbar">
			<div className="landing-navbar-links">
				<NavLinks />
			</div>
		</div>
	);
};

export default Navbar;
