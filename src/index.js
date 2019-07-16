import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Form from './Component/Form';

    const Sapp=()=>{
        return(
            <div>
                <App/>
                {/* <Form/> */}
            </div>
        );
    };




ReactDOM.render(<App />, document.getElementById('root'));


