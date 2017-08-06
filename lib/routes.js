FlowRouter.route('/',{
    name: 'home',
    action(){
        BlazeLayout.render('ContentArea',{main: 'Login'});
    }
});

FlowRouter.route('/createUser',{
    name: 'createUser',
    action(){
        BlazeLayout.render('ContentArea',{main: 'CreateUser'});
    }
});

FlowRouter.route('/getUser',{
    name: 'getUser',
    action(){
        BlazeLayout.render('ContentArea',{main: 'GetUser'});
    }
});