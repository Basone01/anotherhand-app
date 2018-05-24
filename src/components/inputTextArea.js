import React from 'react';
import styled from 'styled-components';

const InputTextAreaContainer = styled.label`
	display: flex;
	flex-direction: column;
	font-size: 16px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	& > textarea {
		padding: 16px 24px;
		border: none;
		outline: none;
		text-align: start;
		resize: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	& > span {
		display: flex;
		align-items: center;
		padding: 16px 24px 0 24px;
		flex-shrink: 0;
		align-self: flex-start;
	}
`;

const InputTextArea = ({ prefix, ...rest }) => {
	return (
		<InputTextAreaContainer>
			<span>{prefix}</span>
			<textarea rows="4" {...rest} />
		</InputTextAreaContainer>
	);
};

export default InputTextArea;
