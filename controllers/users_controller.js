const User = require('../models/user');

module.exports.profile = function(req,res){
  return res.render('user_profile',{
    title : 'Profile'
  });
};

module.exports.signIn = function(req,res){
  return res.render('sign_in',{
    title : 'SignIn'
  });
};

module.exports.signUp = function(req,res){
  return res.render('sign_up',{
    title : 'SignUp'
  });
};

// get sign up data
module.exports.create = function(req,res){
  if(req.body.password != req.body.confirm_password){
    return res.redirect('back');
  }
  User.findOne({email:req.body.email},function(err,user){
    if(err){console.log('error in finding the user',err); return }

    if(!user){
      User.create(req.body,function(err,user){
        if(err){console.log('error in creating the user',err); return }

        return res.redirect('/users/sign-in');
      });
    }else{
      return res.redirect('back');
    }
  });
};

// sign in and create session for the user
module.exports.createSession = function(req,res){
  // TODO Later
}
