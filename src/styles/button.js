import styled from 'styled-components';
import {basicButton} from './css'
export const BlockButton = styled.a`
	${basicButton};
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
	${basicButton};
	width: 32px;
	height: 32px;
	transition: color 0.25s;
	&:hover {
		color: white;
	}
`;
