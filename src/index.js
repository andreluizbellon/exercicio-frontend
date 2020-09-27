import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import 'normalize.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './index.css';
import About from './views/about/About.jsx';

class Page extends PureComponent {
    render() {
        return (
            <About />
        );
    }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Page />, wrapper) : false;
