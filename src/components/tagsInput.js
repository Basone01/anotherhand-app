import React, {Component} from 'react';
import styled from 'styled-components';

const TagsInputText = styled.input `
    outline: none;
    border: none;
    font-size: 14px;
    background-color: rgba(255,255,255,0);
    height:32px;
    min-width:1em;
`;

const TagItem = styled.li `
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

const TagsInputContainer = styled.ul `
    display:flex;
    position:relative;
    align-items:baseline;
    flex-wrap:wrap;
    padding:8px 24px;
    border-bottom:1px solid rgba(0,0,0,0.3);
    min-height:96px;
    cursor:text;
    &>${TagsInputText}{
        flex:1;
    }
`;

const Prefix = styled.span `
    display:flex;
    align-items:center;
    padding:16px 24px 0 24px;
    flex-shrink:0;
    align-self:flex-start; 
    font-weight:bold;    
`;

const Placeholder = styled.p `
    position:absolute;
    color:rgba(0,0,0,0.65);
    line-height:1.2;
    top:16px;
    padding-right:24px;
    font-size:13px;
    user-select:none;
`;
export default class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            focused: false,
            input: ''
        };
    }
    componentWillReceiveProps({value}) {
        this.setState(state => ({items: value}))
    }

    handleInputChange(e) {
        this.setState({input: e.target.value});
    }

    handleInputKeyDown(e) {
        //press enter to add new tags
        if (e.keyCode === 13) {
            const {value} = e.target;
            if (value === '' || this.state.items.includes(value)) {
                console.log(value)

                this.setState(state => ({input: ''}));
                return;
            }

            this.setState(({items}) => ({
                items: [
                    ...items,
                    value
                ],
                input: ''
            }));
        }
        //press backspace can delete last tag
        if (this.state.items.length && e.keyCode === 8 && !this.state.input.length) {
            this.setState(({items}) => ({
                items: items.slice(0, items.length - 1)
            }));
        }
    }

    handleRemoveItem(index) {
        return () => {
            this.setState(({items}) => ({
                items: items.filter((item, i) => i !== index)
            }));
        }
    }

    renderItems() {
        const {items, input, focused} = this.state;
        if (!items.length && input === '' ) {
            return <Placeholder>{this.props.placeholder}</Placeholder>
        }
        return items.map(
                (item, i) => (
                    <TagItem key={i} onClick={this.handleRemoveItem(i)}>
                        {item}
                    </TagItem>
                )
            )
    }

    onFocus() {
        this.setState(state => ({focused: true}))
    }

    onBlur() {
        this.setState(state => ({focused: false}))
    }

    render() {
        const {
            prefix,
            value,
            placeholder,
            ...rest
        } = this.props;
        return (
            <label>
                <Prefix>{prefix}</Prefix>
                <TagsInputContainer >
                    {this.renderItems()}
                    <TagsInputText
                        onFocus={() =>this.onFocus() }
                        onBlur={()=>this.onBlur()}
                        value={this.state.input}
                        onChange={(e) => this.handleInputChange(e)}
                        onKeyDown={(e) => this.handleInputKeyDown(e)}
                        {...rest}
                        />
                </TagsInputContainer>
            </label>
        );
    }

}