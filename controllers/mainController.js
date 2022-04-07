const express = require('express');
const path = require('path');
const app = express();

let users = require('../models/users')

let mainController = {
	home: (req, res) => {
        res.sendFile(path.resolve('./views/home.html'));
    },
    index: (req, res) => {
        return res.render('index');
    },
    
    about: function(req, res) {
        res.sendFile(path.resolve('./views/about.html'));
    },

    contacto: function(req, res) {
        res.send('dejaos su contacto: Form');
    },
	
    list: (req, res) => {
        return res.render('list', {'users': users})
    }

};

module.exports = mainController;