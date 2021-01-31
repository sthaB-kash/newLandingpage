import React from 'react'
import ReactDom from 'react-dom'
import './css/bootstrap.css';

// function Greeting(){
//     return <div><h2>Hello React JS</h2>
//     <p>this is first react component</p></div>;
// }

// const Greeting = () => {
//     return React.createElement('h1',{}, 'this is heading one');
// }

// function Greeting(){
//     return (
//         <div className="divExample">
//             <Person/>
//             <Message/>
//         </div>
//     );
// }

// //other comonents
// const Person = () => <h2>Bikash Stha</h2>
// const Message = () => {
//     return <p>this is message....</p>
// };

// ReactDom.render(<Greeting/>, document.querySelector('#root'));


// function Books(){
//     return (
//         <section>
//             <Book/>
//             <Book/>
//             <Book/>
//             <Book/>
//         </section>
//     );
// }

// const Book = () => {
//     return (
//         <>
//         <Image></Image>
//         <Title />
//         <Author/>
//         </>
//     );
// };

// const Image = () => {
//     return (
//         <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" 
//         alt="" width="300" height="400"/>

//     );
// };

// const Author = () => {
//     return (
//         <h4>Name of Auther</h4>
//     );
// };

// const Title = () =>  <h5>this is the title</h5>

// import App from './App'
import HomePage from './homepage/home'

function MainPage(){
    return (
        <React.Fragment>
            {/* <App /> */}
            <HomePage />
        </React.Fragment>
    );
}

ReactDom.render(<MainPage/>, document.getElementById('root'));
