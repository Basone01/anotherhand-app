import React from 'react';
import BackIcon from 'react-icons/lib/md/arrow-back';
import { withRouter } from 'react-router-dom';
import { IconButton } from '../styles/button';

const BackButton = ({ history }) => {
	return (
		<IconButton>
			<BackIcon
				size={20}
				onClick={() => {
					history.goBack();
				}}
			/>
		</IconButton>
	);
};

export default withRouter(BackButton);
