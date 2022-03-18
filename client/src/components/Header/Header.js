import React from 'react';
import './Header.css';
import Logo from '../../assets/logo/BrainFlix-logo.svg';
import { Link } from "react-router-dom";
import Upload from "../../assets/icons/upload.svg";

export default class Header extends React.Component{
    state = {
        searchTerm: " ",
    }
    
    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }
    
    render() {
        return(
            <section className='Header'>
                <Link to={"/videos/84e96018-4022-434e-80bf-000ce4cd12b8"}>
                    <img src={Logo} className='logo' alt="Brainflix logo" />
                </Link>

                <form onSubmit={this.handleSubmit} className='header-form'>
                    <div className='header-input__container'>
                    <input type="text" onChange={this.handleChange} className='header-form__input' placeholder="Search" />
                    
                    <input type="image" className='header-form__image' src='http://localhost:5001/static/Mohan-muruge.jpg' alt='Mohan' />
                    </div>
                    <Link to={"/uploads"}>
                        <button type='submit' className='header-form__button'><img src={Upload} alt="Upload Here" /><p>Upload</p></button>
                    </Link>
                    <input type="image" className='mohan-over480' src='http://localhost:5001/static/Mohan-muruge.jpg' alt="text" />
                </form>
            </section>
        )
    }
}