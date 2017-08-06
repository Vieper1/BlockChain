Template.CreateUser.events({

	'submit .newuserform' (event){
		event.preventDefault();
		console.log("Submitting Form");
		const target = event.target;
		const name = target.name.value;
		const data = {
			"name": target.name.value,
			"address": target.address.value,
			"usertype": target.usertype.value
		};
		console.log(data);

		myContract.createUsers(target.address.value, target.name.value, target.usertype.value, function(err,res){
			if(!err){
				alert("User Added in the blockchain");
			}
		});
	}
})