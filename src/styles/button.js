import styled from 'styled-components';
import {baseButton} from './css'
import {Link} from 'react-router-dom'
export const BlockButton = styled.a`
	${baseButton};
	min-height: 36px;
	background-color: white;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-style: dashed;
	transition: background 0.25s;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export const IconButton = styled.a`
	${baseButton};
	width: 32px;
	height: 32px;
	transition: color 0.25s;
	&:hover {
		color: white;
	}
`;
export const LinkButton = styled(Link)`
	${baseButton};
	padding:8px;
	text-decoration:none;
	color:inherit;
	&:visited{
		color:inherit;
	}

`