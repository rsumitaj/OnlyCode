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
  // TODO Later
};

// sign in and create session for the user
module.exports.createSession = function(req,res){
  // TODO Later
}
