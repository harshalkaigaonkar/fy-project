import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './weblivecapture.css';

const videoConstraints = {
	width: 1280,
	height: 720,
	facingMode: 'user'
};

const WebLiveCapture = ({ exam }) => {
	const webcamRef = React.useRef(null);
	const [image, setImage] = useState('');
	const [people, setPeople] = useState('Detecting')
	const capture = React.useCallback(
		() => {
			const imageSrc = webcamRef.current.getScreenshot();
			console.log('capture');
			return imageSrc
		},
		[webcamRef]
	);
	console.log('web live capture')
	const warnUser = (msg) => {
		toast.warn(msg, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

	}
	useEffect(() => {
		setInterval(() => {
			const img = capture()
			let data = {
				img
			}
			data = JSON.stringify(data)
			fetch('http://localhost:8080/predict_people', {
				method: 'POST',
				Headers: {
					Accept: 'application.json',
					'Content-Type': 'application/json'
				},
				body: data
			}).then(res => res.json())
				.then(data => {
					setPeople(data.people)
					if (data.people === 0) warnUser('You are out of screen . (no person detected)')
					if (data.people > 1) warnUser(`${data.people}, persons detected`)
				})
				.catch(err => console.log(err))
		}, 15000)
	}, [])

	return (
		<React.Fragment>
			<Webcam
				audio={false}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				height={150}
				width={300}
				videoConstraints={videoConstraints}
			/>

			<button >
				{people === 0 ? 'not found' : people}
			</button>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			{/* Same as */}
			<ToastContainer />
		</React.Fragment>
	);
};

export default WebLiveCapture;
