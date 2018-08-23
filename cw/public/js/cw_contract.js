var _web3internal = {
    constract: null
  };
  
  function getWeb3Instance() {
    let web3 = window['web3'];
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }
    return web3;
  }
  
  function getCoinbase() {
    return web3.eth.coinbase;
  }
  
  function getContract() {
    var web3 = getWeb3Instance();
    if (!web3.etsContract) {
      web3.etsContract = web3.eth.contract(ABI).at('0x6be83f185ff12b8ad85a765f6bde39269bebc51e');
    }
    return web3.etsContract;
  }
  
  function JoinInsurance(to, value, callback) {
    const from  = getCoinbase();
          value = value * 10 ** 18;
    console.log('Joininsurance,', { to, value, from });
    web3.eth.sendTransaction({ to, value, from }, callback);
  }
  

  
  // function Funding() payable public {
  //   balance = msg.value;
  //   emit funding(msg.value, balance);
  // }
  
  // function Donating() payable public OnlyOwner {
  //   to.transfer(msg.value);
  //   balance = msg.value;
  //   emit DonationTo(to, msg.value);
  //   assert(msg.value == 0);
  // }
  
  // function CheckMsg() payable public {
  //   emit DonationMsg(msg.data, msg.sender, msg.value);
  // }
  
  const ABI = [
        {
            "constant"       : false,
            "inputs"         : [],
            "name"           : "deposit",
            "outputs"        : [],
            "payable"        : true,
            "stateMutability": "payable",
            "type"           : "function"
        },
        {
            "constant"       : false,
            "inputs"         : [],
            "name"           : "JoinInsurance",
            "outputs"        : [],
            "payable"        : true,
            "stateMutability": "payable",
            "type"           : "function"
        },
        {
            "constant": false,
            "inputs"  : [
                {
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name"           : "withdraw",
            "outputs"        : [],
            "payable"        : true,
            "stateMutability": "payable",
            "type"           : "function"
        },
        {
            "constant": true,
            "inputs"  : [
                {
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name"   : "getBalance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable"        : false,
            "stateMutability": "view",
            "type"           : "function"
        },
        {
            "constant": true,
            "inputs"  : [],
            "name"    : "getTotalBalance",
            "outputs" : [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable"        : false,
            "stateMutability": "view",
            "type"           : "function"
        }
    ];

  