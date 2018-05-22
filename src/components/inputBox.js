import React from 'react'
import styled from 'styled-components';

const InputBoxContainer = styled.div `
    display:flex;
    font-size:16px;
    
    &>input{
        flex-grow:1;
        padding:0.5em 1em;
        border:none;
        outline:none;
        text-align:end;
    }
    &>span{
        display:flex;
        align-items:center;
        padding:0.5em 1em;
    }    
`;

const InputBox = ({
    prefix,
    ...rest
}) => {
    return (
        <InputBoxContainer>
            <span>{prefix}</span>
            <input type="text" {...rest}/>
        </InputBoxContainer>
    )
}

export default InputBox