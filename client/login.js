import { Session } from 'meteor/session';


Session.set("userRole","user");

Template.Login.helpers({
        defaultAccount() {        
                console.log("hello" + web3.eth.defaultAccount);
                return web3.eth.defaultAccount;
        },
        defaultAccountBalance () {
                var template = Template.instance();
                web3.eth.getBalance (web3.eth.defaultAccount,function(err,res){
                        var resToEth = web3.fromWei(res,'ether');
                        TemplateVar.set(template,"defaultAccountBalance",resToEth);
                })
        }
})

Template.Login.events({
        'click .btn' (){
                console.log("Click");
                if (Session.get("userRole")=="admin") {
                        FlowRouter.go('adminDashboard');
                }
                else if (Session.get("userRole")=="user"){
                        FlowRouter.go('userDashboard')
                }

        }
})
Template.SideMenu.helpers({
        ifAdmin() {
                if (Session.get("userRole")=="admin") {
                        return true
                }
                else if (Session.get("userRole")=="user"){
                        return false
                }
        }
})

Template.SideMenu.events({
        'submit .search'(event){
                event.preventDefault();
                console.log(event.target.batchNo.value);
                if (event.target.batchNo.value=="10150"){
                        Session.set("first",true);
                        Session.set("second",false);
                        Session.set("third",false);
                } 
                if (event.target.batchNo.value=="10151"){
                        Session.set("first",false);
                        Session.set("second",true);
                        Session.set("third",false);
                }
                if (event.target.batchNo.value=="10152"){
                        Session.set("third",true);
                        Session.set("second",false);
                        Session.set("first",false);
                }
                Session.set("")
                FlowRouter.go("showBatchTrace")
        }
})