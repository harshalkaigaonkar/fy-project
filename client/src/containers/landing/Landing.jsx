import React from 'react';
import { Navbar, CtaButton, CommonInput } from './../../components';
import infinite from './../../assets/infinite.svg';
import './landing.css';

const featureList = [
	'Multiple People Detection',
	'Full Screen Check',
];

const Landing = () => {
	return (
		<React.Fragment>
			<Navbar />

			<div className="section-type landing-page">
				<div className="landing-content">
					<div className="headings">
						<span className="sub-text">Advanced & Automated</span>
						<span className="main-heading gradient-text">
							Proctoring Solution
						</span>
					</div>

					<p className="desc">
						Create exams , online monitoring , share google forms
					</p>
				</div>

				<div className="landing-cta">
					<a href="/create">
						<CtaButton text="Create a test" />
					</a>

					<p className="desc">OR</p>
					<div className="input-item unique-link">
						<CommonInput placeholderText="Unique test code" />
						<span className="join-link">
							<a href="/exam">Join</a>
						</span>
					</div>
				</div>

				<div className="features-content">
					<div className="curr-heading">
						<p className="gradient-text">
							<b>Powerful</b> & Lightweight
						</p>
						<h2 className="title-heading">Features</h2>
					</div>

					<div className="all-features">
						{featureList.map((it) => (
							<p className="single-feature">{it}</p>
						))}
					</div>

					<div className="mid-cta">
						<p className="phew">phew...</p>
						<a href="/create">
							<CtaButton />
						</a>
					</div>
				</div>

				<div className="final-features">
					<div className="top-sec">
						<div className="left-text">
							<h3 className="gradient-text">
								Effortlessly integrates with
							</h3>
							<h1 className="title-heading">
								Google Forms or Microsoft Surveys
							</h1>
						</div>
						<div className="infinite">
							<img src={infinite} alt="infinite" />
						</div>

						<div className="right-text">
							<h3 className="gradient-text">The best part?</h3>
							<h1 className="title-heading">
								Live Status on Admin Dashboard
							</h1>
						</div>
					</div>

					<div className="mid-cta final-cta">

						<a href="/create">
							<CtaButton text="Create a test" />
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Landing;
