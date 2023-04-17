import React from 'react';
import { Link } from 'react-router-dom'
import { CommonInput, CtaButton } from '../../components';
import './create.css';

const inputField = [
	'Email ID',
	'Organization Name',
	'Test Name',
	'Question Paper Link',
	'Total Expected Candidates',
	'Start Date-Time Format',
	'Duration'
];

const Create = () => {
	return (
		<div className="client-create">
			<div className="create-form">
				<h1 className="title-heading">Create a test</h1>
				<div className="input-fields">
					{inputField.map((item) => (
						<CommonInput placeholderText={item} />
					))}
				</div>

				<Link to='/'>
					<CtaButton text="Create" />
				</Link>
			</div>
		</div>
	);
};

export default Create;
