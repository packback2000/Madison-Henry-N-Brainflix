
import React from "react";
import "./Uploads.css";
import publishButton from "../../assets/icons/upload.svg";
import axios from "axios";

export default class uploadsPage extends React.Component {
    state = {
        video: [],
        title: "",
        description: "",
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        });
      };

      handleChangeDescription = (event) => {
          this.setState({
              description: event.target.value
          })
      }

        handleUpload = (e) => {
            e.preventDefault()
            axios.post('http://localhost:5001/videos', {
                title: this.state.title,
                description: this.state.description,
            })
            alert("video was uploaded")
            this.props.history.push("/videos/84e96018-4022-434e-80bf-000ce4cd12b8")
        }    

    render() {
        
        return(
            <section className="uploads" >
                <hr></hr>
                <h1 className="uploads-title">Upload Video</h1>
                <hr className="hidden" />
                <p className="uploads-thumbnail__title">Video Thumbnail</p>
                <div className="uploads-image__container">
                    <img src="http://localhost:5001/static/Upload-video-preview.jpg" alt="" className="uploads-image"/>
                </div>

                <form className="uploads-form" onSubmit={this.handleUpload}>
                    <label className="uploads-input__title-label">TITLE YOUR VIDEO</label>
                        <input type="text" className="uploads-input__title" name="title" onChange={this.handleChangeTitle} value={this.state.title} required placeholder="ADD A TITLE TO YOUR VIDEO"/>
                    <label className="uploads-input__description-label">ADD A VIDEO DESCRIPTION</label>
                        <textarea type="text" className="uploads-input__description" name="description" onChange={this.handleChangeDescription} value={this.state.description} required placeholder="ADD A DESCRIPTION TO YOUR VIDEO" />
                       
                        <hr className="hidden" />
                       
                        <div className="buttons-container">
                        <div className="submit-button__container">
                            <button type="submit"  className="uploads-button__publish"> <img src={publishButton} alt="Button" /> <p>PUBLISH</p></button>
                        </div>

                    <button className="uploads-button__cancel" onClick={this.handleCancel}>
                        CANCEL
                    </button>

                    <div className="submit-button__container-hidden">
                            <button type="submit"  className="uploads-button__publish"> <img src={publishButton} alt="Button" /> <p>PUBLISH</p></button>
                        </div>
                    </div>
                    
                

                </form>
            </section>

        )
    }
}