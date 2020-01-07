import React, { Component, useState } from "react";
import ImageCropper from "./ImageCropper";

class ProfilePage extends Component{
    state = {
        imageBlob: null,
        name: '',
        age: '',
        country: '',
        widget: {
            active: false,
            src: null
        }
    }    
    onSelectFile = (e) => {
        if(e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                this.setState({
                    widget: {
                        active: true,
                        src: reader.result
                    }
                });
            })
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    onInputChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    closeWidget = () => {
        this.setState({
            imageBlob: null,
            widget: {
                active: false,
                src: null
            }
        });
    }
    uploadProfile = (e) => {
        e.preventDefault();
        console.log('uploading......');
        const state = {...this.state};
        delete state.widget;
        console.log(state);
    }
    render(){
        console.log('profile', this.state);
        return(
            <div className="profile-page">
                <form onSubmit={this.uploadProfile}>
                <div className="profile-page__image">
                <div>
                    <label>Profile Image</label>
                    <input type="file" accept="image/*" onChange={this.onSelectFile}/>
                    {this.state.widget.active && (
                        <ImageCropper 
                            src={this.state.widget.src}
                            onComplete={blob => this.setState({imageBlob: blob})}
                            onClose={this.closeWidget}
                            />
                    )}
                </div>
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onInputChange}/>
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" name="age" value={this.state.age}  onChange={this.onInputChange}/>
                </div>
                <div>
                    <label>Country</label>
                    <input type="text" name="country" value={this.state.country}  onChange={this.onInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Upload</button>
                </form>
            </div>
        );
    }
}

export default ProfilePage;