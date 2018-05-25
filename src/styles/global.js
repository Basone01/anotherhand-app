import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
injectGlobal`
    ${styledNormalize}
    body{
        font-family: 'Helvetica, sans-serif';        
        background-color:hsla(290,60%,70%,0.3);
    }
    body,div,input,textarea,span,h1,h2,h3,h4,h5,h6,label,ul,li,ol,image,p{
        box-sizing:border-box;
        margin:0;
        padding:0;
        
    }
`;
