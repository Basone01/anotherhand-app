import React from 'react';
import {lifecycle,compose, withState, withProps, withHandlers} from 'recompose';
import {Placeholder,TagItem,TagsInputContainer,TagsInputText,Prefix} from './style'

const enhance = compose(
    withState("items", "setItems", []),
    withState("focused", "setFocused", false),
    withState("input", "setInput", ''),
    lifecycle(({setItems,value})=>({
        componentWillReceiveProps (nextProps) {
            setItems(value)
        }
    })),
    withHandlers({
        handleInputChange: ({setInput}) => e => {
            setInput(e.target.value);
        },
        handleInputKeyDown: ({setInput, setItems, items, input}) => e => {
            //press enter to add new tags
            if (e.keyCode === 13) {
                const {value} = e.target;
                if (value === '' || items.includes(value)) {
                    setInput('');                
                    return;
                }
                //add new tag
                setItems([...items,value]);
                setInput('');                
            }
            //press backspace can delete last tag
            if (items.length && e.keyCode === 8 && !input.length) {
                //remove last tag
                setItems(items.slice(0, items.length - 1));
            }
        },
        handleFocus: ({ setFocused }) => e => {
            setFocused( true );
        },
        handleBlur: ({ setFocused,setInput,setItems,items }) => e => {
            const {value} = e.target;
            if (value === '' || items.includes(value)) {
                setInput('');                
                return;
            }
            //add new tag 
            setItems([...items,value]);
            setInput('');        
            setFocused( false );
        },
        handleRemoveClick:({setItems,items})=>(index)=>{
            setItems(items.filter((item, i) => i !== index))
        }
    }),
    withProps(
        ({ items,handleRemoveClick }) => ({
            tags: items.map((item, i) => (<TagItem key={i} onClick={()=>handleRemoveClick(i)}>{item}</TagItem>))
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