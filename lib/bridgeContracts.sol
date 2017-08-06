pragma solidity ^0.4.0;

contract Bridger
{
    address public admin_addr;
    function Bridger()
    {
        admin_addr = msg.sender;
    }

    
    ////////////////////////////////////////////////// Users
    modifier adminOnly
    {
        require(msg.sender==admin_addr);
        _;
    }
    
    enum userType {NGO,Volunteer}
    struct Users
    {
        string name;
        userType utype;
        address addr;
        bool exists;
    }
    
    mapping(address => Users) public listOfUsers;
    function getUser(address _address) returns (string)
    {
        return listOfUsers[_address].name;
    }
    
    modifier registeredUsersOnly(address _callingUsers){
        require(listOfUsers[_callingUsers].exists);
        _;
    }

    function createUsers(address _address, string _userName, userType _type) adminOnly returns(string)
    {
        Users memory user;

        user.exists=true;

        user.addr=_address;
        user.name=_userName;
        user.utype=_type;

        listOfUsers[_address]=user;

        return user.name;
    }
    ////////////////////////////////////////////////// Users
}