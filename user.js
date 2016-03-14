var db = require('../models/db');
exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.logs = function(req, res){
	console.log("here in logs");
	res.json({message:"Logs are updated..."});
}
exports.data = function(req, res){
	console.log("here in data, ", req.body.uname);
	res.json({message:"data saved sucessfullfy"});
}
exports.send = function(req, res){
      var a=req.body.username;
  var b=req.body.password;
 var u = $("#uname").val();
    var p = $("#pass").val()
	 var client = db.pg_connect();
	 console.log("recieved data from ajax call", req.body);
	 console.log("client is",client);
	 client.query("insert into login values (u,p);", function(err, result) {
	      if (err){
	    	  console.log("errr is", err);
	    	  res.json({message:"err in db query"})
	      }else{
	    	  console.log("result is ", result);
                   
	    	  res.json({message:"data saved sucessfullfy"})
	      }
	 });


	//console.log("here in data, ", req.body.username,req.body.password);
     // res.json({message:"data saved sucessfullfy"});
}

exports.login = function(req, res){
	res.render('login');
	
}
exports.input = function(req, res){
	res.render('data_input');
	
}
