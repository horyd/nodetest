mongoose = require('mongoose');
msgModel = require('../models/message.js');
db_url = process.env.MONGOLAB_URI || "mongodb://jaryd:subtle22@ds041387.mongolab.com:41387/heroku_app8873629" ;
db1 = mongoose.connect(db_url);

exports.index = function(req, res){
    msgModel.find({},function(err,sxcmsgs){
        res.render('messages/index', { 'title': 'Hello' , 'items' : sxcmsgs});
    });
};

exports.show = function(req, res){
    msgModel.findOne({_id: req.params.id},function(err, sxcmsg){
        res.render('messages/show', { 'title': req.params.id, 'message': sxcmsg });
    });
};