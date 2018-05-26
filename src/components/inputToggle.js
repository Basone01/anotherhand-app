import React from 'react';
import styled from 'styled-components';
import { mousePointer} from 'styles';
const CheckboxContainer = styled.label`
	display: flex;
    justify-content:center;
    align-items:center;
	font-size: 14px;
    padding:8px 12px;
	border-left: 1px solid rgba(0, 0, 0, 0.2);
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    ${mousePointer};
    &:last-of-type{
	    border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
    &[value=true]{
        box-shadow:0 0 4px rgba(0,0,0,0.5) inset;
    }
`;

const Checkbox = styled.input`
    display:none;
`;

const InputToggle = ({children,value,onChange, ...rest}) => {
    return (
        <CheckboxContainer value={value}>
          { children }
          <Checkbox type="checkbox" value={value} onChange={ onChange } {...rest} />
        </CheckboxContainer>
        );
};

export default InputToggle;
