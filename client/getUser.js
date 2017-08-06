Template.GetUser.events({

	'click #viper' (event){
		
		event.preventDefault();
		const target = event.target;
		
		
		mycontract.getUser(target.address.value)
		
		console.log();
	}
})