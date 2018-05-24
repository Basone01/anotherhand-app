import styled from 'styled-components';

export const TagsInputText = styled.input `
    outline: none;
    border: none;
    font-size: 14px;
    background-color: rgba(255,255,255,0);
    height:32px;
    min-width:1em;
`;

export const TagItem = styled.li `
    display: inline-block;
    padding: 4px 8px;
    border-radius:4px;
    margin:4px;
    cursor: pointer;
    box-shadow: 0 0 1px black;
    word-break:break-all;
    &:hover{
        box-shadow: 0 0 2px red;  
    }
    &:last-of-type{
        margin-right:8px;        
    }
`;

export const TagsInputContainer = styled.ul `
    display:flex;
    position:relative;
    align-items:baseline;
    flex-wrap:wrap;
    padding:8px 24px;
    border-bottom:1px solid rgba(0,0,0,0.3);
    min-height:96px;
    padding-bottom:12px;
    cursor:text;
    &>${TagsInputText}{
        flex:1;
    }
`;

export const Prefix = styled.span `
    display:flex;
    align-items:center;
    padding:16px 24px 0 24px;
    flex-shrink:0;
    align-self:flex-start; 
    font-weight:bold;    
`;

export const Placeholder = styled.p `
    position:absolute;
    color:rgba(0,0,0,0.65);
    line-height:1.25;
    top:16px;
    padding-right:24px;
    font-size:13px;
    user-select:none;
    letter-spacing:0.25px;
`;