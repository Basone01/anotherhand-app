import React from 'react'
import styled from 'styled-components';

const InputTextAreaBoxContainer = styled.label `
    display:flex;
    flex-direction:column;
    font-size:16px;
    font-weight:bold;
    border-bottom:1px solid rgba(0,0,0,0.2);
    &>textarea{
        flex-grow:1;
        padding:16px 24px;
        border:none;
        outline:none;
        text-align:start;
        resize:none;
        &::-webkit-scrollbar{
            display:none;
        }
    }
    &>span{
        display:flex;
        align-items:center;
        padding:16px 24px 0 24px;
        flex-shrink:0;
        align-self:flex-start;
    }    
`;

const InputTextAreaBox = ({
    prefix,
    ...rest
}) => {
    return (
        <InputTextAreaBoxContainer>
            <span>{prefix}</span>
            <textarea name="" rows="5"  {...rest}></textarea>

        </InputTextAreaBoxContainer>
    )
}

export default InputTextAreaBox