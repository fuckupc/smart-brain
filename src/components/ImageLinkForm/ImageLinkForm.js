import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
	return (
		<div>
			<p className='f3'>
				{'This magic brain will detect the face in your image, give it a try!'}
			</p>
			<div className='center'>
				<div className='form pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70' type='text' />
					<button className='f4 ph3 pv2 w-30 link grow white bg-light-purple'>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;