import React from 'react'
import axios from 'axios'

class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('user_file',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:4001/uploads",formData,config)
            .then((response) => {
				console.log(response)
                alert("The file is successfully uploaded");
            }).catch((error) => {
				console.log(error)
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                
                <input type="file" name="user_file" onChange= {this.onChange} />
				<input type="email" name=''  placeholder=' enter email [for example: xyz@gmail.com]'/>
				<input type="number" placeholder='enter valid number' />
				<textarea name="" id="" cols="50" rows="10" placeholder='Cover Letter'></textarea><br />
                <button type="submit" placeholder='' className='submitButton'>Upload</button>
            </form>
        )
    }
}

export default ReactUploadImage