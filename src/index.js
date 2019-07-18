import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Page from './Scomponent/Page';
// import Form from './Component/Form';

    const Sapp=()=>{
        return(
            <div>
                <App/>
                {/* <Page/>
                <Page/> */}
            </div>
        );
    };




ReactDOM.render(<App />, document.getElementById('root'));


