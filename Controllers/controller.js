var mongoose = require('mongoose');
var User = require('../Models/data')

exports.index = function(req,res){
  User.find({})
  .exec(function(err,posts){
    if(err) {
      res.send('Error occured');
    }
    else{
      res.render('index',{posts : posts});
    }
  });
};

exports.deletedatashow = function(req,res){
  res.render('deletedata');
};

exports.adddata = function(req,res){
  res.render('adddata');
};

exports.addpost = function(req,res){
  var newData = new User();
  newData.title = req.body.title;
  newData.body = req.body.body;
  newData.comments = req.body.comments;

  User.find({title: req.body.title}).exec(
    function(err,data){
      if(data.length) res.send('Title Already Exists');
      else {
        newData.save(function(err,data){
          if(err){
            res.send('Fill all the required fields');
          }
          else{
            res.redirect('/');
          }
        });
      }
    });
};

exports.deletedata = function(req,res){
  User.remove({title: req.body.title},
    (err,result)=>{
      if(err) {res.send('Given Title does not exist!');}
      else {res.redirect('/');}
  });
};
