import {css} from 'styled-components';

export const fadeOnHover = css`
    transition:opacity 0.3s;
    &:hover{
        opacity:0.75;
    }
`

export const mousePointer = css`
    cursor: pointer;
    user-select: none;
`

