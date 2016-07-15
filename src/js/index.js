import React from 'react';
import ReactDOM from 'react-dom';
import App from '../js/App.js';
import Header from '../js/components/common-header.js';
import HeaderVanilla from '../js/vanilla_conmponents/vanilla-header.js';
import 'core-js';

require  ("../sass/entry.scss");

document.addEventListener("DOMContentLoaded", function(){
    init();
});

function init(){
    console.log("Dom Loaded ", this);
    initCommon();

    try{
        fin.desktop.main(function(){
            initWithOpenFin();
        })
    }catch(err){
        initNoOpenFin();
    }
};

function initCommon(){


   let _header = HeaderVanilla.create({text:"This is the new text..."});
    _header.render(document.querySelector('#content-vanilla'));

    ReactDOM.render(
        (
            <div>
                <Header />
                <App location={['about']} />

            </div>
        ),
        document.getElementById('content')
    );
}

function initWithOpenFin(){
    console.log("OpenFin is available");
    // Your OpenFin specific code to go here...
}

function initNoOpenFin(){
    console.log("OpenFin is not available - you are probably running in a browser.");
}
