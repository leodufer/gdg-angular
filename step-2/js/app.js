angular.module('app',[])
	.controller('MyController',function() {
		var self = this;
		self.users = [
		  {
		    "id": 1,
		    "name": "Leanne Graham",
		    "email": "Sincere@april.biz",
		    "phone": "1-770-736-8031 x56442"
		  },
		  {
		    "id": 2,
		    "name": "Ervin Howell",
		    "email": "Shanna@melissa.tv",
		    "phone": "010-692-6593 x09125"
		  },
		  {
		    "id": 3,
		    "name": "Clementine Bauch",
		    "email": "Nathan@yesenia.net",
		    "phone": "1-463-123-4447"
		  }];

		  self.setCurrentUser = function(user) {
		  	self.currentUser = user;
		  };
	});