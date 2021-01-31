import React from 'react'

import './index.css'
import {homeContent} from './data'
import Ex from './hooks/example'
import DateTime from './dateTime'


function App() {
    return (
        <React.Fragment>
            <section className="container-fluid main">
                <div className="style"></div>
                <div className="style1"></div>
                <Welcome text={homeContent.welcome}/>
            </section>
            <Navbar />
            <DateTime />
            <Ex />
            <Content></Content>
            <Footer/>
        </React.Fragment>
    );
}


const Welcome = (props) => {
    const {text}= props;
    return (
        <div className="welcome-content">
            <div className="welcome">
                <h1>{text}</h1>
                <Message msg={homeContent.msg}/>
                <MoreBtn />
            </div>
        </div>
    );
};
const Message = (props) => {
    return (
        <div className="slogan">{props.msg}</div>
    );
};
const MoreBtn = () => <button className="btn login-btn">More</button>

const Navbar =() => {
    return (
        <ul>
            <li className="active">Home</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>About</li>
        </ul>
    );
}

const Content = () => {
    return (
        <div className="container contents">
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
        </div>
    );
};

const Footer =() => {
    return (
        <footer>
            <p>&copy; All Rights Reserved | 2021</p>
        </footer>
    );
};

const Article = () => {
    return (
        <article>
            <img src = "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="" />
            <div className = "title">Title of the article</div>
            <div className = "author">Author</div>
        </article>
    );
};

export default App