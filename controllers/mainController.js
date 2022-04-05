const express = require('express');
const path = require('path');
const app = express();



let mainController = {
	home: (req, res) => {
        res.sendFile(path.resolve('./views/home.html'));
    },
    
    about: function(req, res) {
        res.sendFile(path.resolve('./views/about.html'));
    },

    contacto: function(req, res) {
        res.send('dejaos su contacto: Form');
    }
	
};

module.exports = mainController;