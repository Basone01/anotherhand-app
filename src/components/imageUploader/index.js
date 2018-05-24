import React, {Component} from 'react'
import {UploadBoxContainer, UploaderButton, Image, ImageContainerWithOverlay} from './style';
import {HorizontalScrollableContainer} from 'styles';
export default class InputFile extends Component {
    state = {
        files: ["https://pbs.twimg.com/profile_images/955376907574427649/aHNuNU8n_400x400.jpg",
        "https://pbs.twimg.com/profile_images/955376907574427649/aHNuNU8n_400x400.jpg",
        "https://pbs.twimg.com/profile_images/955376907574427649/aHNuNU8n_400x400.jpg"
    ]
    }
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    handleFileChange() {
        const input = this.inputRef.current
        //iterate all file
        for (let i = 0; i < input.files.length; i++) {
            var reader = new FileReader();
            reader.onload = (e) => {
                const newfile = e.target.result
                //don't add if it's a duplicate image or not an image
                if (this.state.files.includes(newfile) || !e.target.result.match(/^data:image/)) {
                    input.value = ''
                    return;
                }
                //add to state
                this.setState(({files}) => ({
                    files: [
                        ...files,
                        newfile
                    ]
                }))
            };
            //start read file to base64
            reader.readAsDataURL(input.files[i]);
        }

    }
    removeImage(index) {
        //removeClickedImg
        this.setState(({files}) => ({
            files: files.filter((file, i) => i !== index)
        }))
    }
    renderSelectedImage() {
        const {files} = this.state;
        return files.map((file, i) => (
            <ImageContainerWithOverlay key={i}>
                <Image src={file} alt={file}/>
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
                            name='file'
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
