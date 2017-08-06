contractAddress = "0xfe600ea0c06df018b6c98888debd951f62a0627d";

contractAbi = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"listOfUsers","outputs":[{"name":"name","type":"string"},{"name":"utype","type":"uint8"},{"name":"addr","type":"address"},{"name":"exists","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"}],"name":"getUser","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_userName","type":"string"},{"name":"_type","type":"uint8"}],"name":"createUsers","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"admin_addr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];


web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

myContract = web3.eth.contract(contractAbi).at(contractAddress);