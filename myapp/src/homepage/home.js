import React from 'react'
import './index.css' 

function HomePage () {
    return (
        <React.Fragment>
            <NavBar />
            <BackgroundImage />
            <div className="login-signup">
                <LoginSignup name="Login" className="login-btn" />
                <LoginSignup name="Signup" className="signup-btn" />
            </div>

        </React.Fragment>
      
    );
}

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href='#none' style={{paddingRight: '30px'}}>Company Name</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <NavbarToggler />             
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#none">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#none">Universities</a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="#none">Test</a>
                </li>
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#none" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Student Supports
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#nonenone">Education Counselors</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#none">Banks</a>
                    </div>
                </li> 
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#none" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Career
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#nonenone">Internship</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#none">Job</a>
                    </div>
                </li> 
                
                <li className="nav-item">
                    <a className="nav-link" href="#none">About us</a>
                </li>
                
                </ul>
            </div>
            </nav>
    );
};

const BackgroundImage = () => {
    // const img = "";
    return (
        <div className="background-image">
            
        </div>
    );
};

const LoginSignup =(props) => {
    return (
        <div className={props.className}>
            {props.name}
        </div>
    );
};

const NavbarToggler = () => {
     
        return (
            <>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
    
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>
        </>
    );
}

export default HomePage