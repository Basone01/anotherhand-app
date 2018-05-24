import React from 'react';
import {compose, withState, withProps, withHandlers} from 'recompose';
import {Placeholder,TagItem,TagsInputContainer,TagsInputText,Prefix} from './style'

const enhance = compose(
    withState("focused", "setFocused", false),
    withState("input", "setInput", ''),
    withHandlers({
        handleInputChange: ({setInput}) => e => {
            setInput(e.target.value);
        },
        handleInputKeyDown: ({setInput, onChange, tags, input}) => e => {
            //press enter to add new tags
            if (e.keyCode === 13) {
                const {value} = e.target;
                if (value === '' ||value === ' ' || tags.includes(value)) {
                    setInput('');                
                    return;
                }
                //add new tag
                onChange([...tags,value]);
                setInput('');                
            }
            //press backspace can delete last tag
            if (tags.length && e.keyCode === 8 && !input.length) {
                //remove last tag
                onChange(tags.slice(0, tags.length - 1));
            }
        },
        handleFocus: ({ setFocused }) => e => {
            setFocused( true );
        },
        handleBlur: ({ setFocused,setInput,onChange,tags }) => e => {
            const {value} = e.target;
            if (value === '' || tags.includes(value)) {
                setInput('');                
                return;
            }
            //add new tag 
            onChange([...tags,value]);
            setInput('');        
            setFocused( false );
        },
        handleRemoveClick:({onChange,tags})=>(index)=>{
            onChange(tags.filter((item, i) => i !== index))
        }
    }),
    withProps(
        ({ tags,handleRemoveClick }) => ({
            tags: tags.map((item, i) => (<TagItem key={i} onClick={()=>handleRemoveClick(i)}>{item}</TagItem>))
        })
    ),
    withProps(
        ({tags,input,placeholder})=>({
            placeholderOrTags:(!tags.length && input === '')?<Placeholder>{placeholder}</Placeholder>:tags
        })
    )
);


const TagInput = ({style,input, prefix,placeholderOrTags, handleBlur, handleFocus, handleInputChange, handleInputKeyDown }) => (
    <label >
        <Prefix>{prefix}</Prefix>
        <TagsInputContainer style={style}>
            {placeholderOrTags}
            <TagsInputText
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
            />
        </TagsInputContainer>
    </label>
);

export default enhance(TagInput)