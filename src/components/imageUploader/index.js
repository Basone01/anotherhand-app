import React, {Component} from 'react'
import {UploadBoxContainer, UploaderButton, Image, ImageContainerWithOverlay} from './style';
import {HorizontalScrollableContainer} from 'styles';
export default class InputFile extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    handleFileChange() {
        const input = this.inputRef.current
        const {images, onChange} = this.props;
        //iterate all file
        for (let i = 0; i < input.files.length; i++) {
            var reader = new FileReader();
            //bind event
            reader.onload = (e) => {
                const newfile = e.target.result
                //don't add if it's a duplicate image or not an image
                if (images.includes(newfile) || !e.target.result.match(/^data:image/)) {
                    input.value = ''
                    return;
                }
                onChange(newfile)
                
            };
            //start read file to base64
            reader.readAsDataURL(input.files[i]);
        }

    }
    removeImage(index) {
        const {onRemove, images} = this.props;
        onRemove(images.filter((images, i) => i !== index))
    }
    renderSelectedImage() {
        const {images} = this.props;
        return images.map((image, i) => (
            <ImageContainerWithOverlay key={i}>
                <Image src={image} alt="ERROR"/>
                <span onClick={() => this.removeImage(i)}>
                    <span>X</span>
                </span>
            </ImageContainerWithOverlay>
        ))
    }

    render() {
        return (
            <HorizontalScrollableContainer>
                <UploadBoxContainer>
                    {this.renderSelectedImage()}
                    <UploaderButton>
                        <span
                            style={{
                            fontSize: 12,
                            color: "rgba(0,0,0,0.5)"
                        }}>+ เพิ่มรูปภาพ</span>
                        <input
                            name='images'
                            ref={this.inputRef}
                            type="file"
                            multiple
                            onChange={() => this.handleFileChange()}/>
                    </UploaderButton>
                </UploadBoxContainer>
            </HorizontalScrollableContainer>
        )
    }
}
