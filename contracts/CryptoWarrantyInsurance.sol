pragma solidity^0.4.24;

contract CryptoWarrantyInsurance {
	uint totalDeposit;
	address addr;
	mapping(address=> uint) balanceOf;
	
	function deposit () public payable {
	balanceOf[msg.sender] += msg.value;
	totalDeposit += msg.value;
	}
	
	function InsuranceApply() public payable {
		balanceOf[msg.sender] += msg.value;
		totalDeposit += msg.value;
		withdraw(msg.sender, 3000000000000000000);
	}
	
	function withdraw(address _addr, uint _amount) public payable {	
	    addr = _addr;
		balanceOf[msg.sender] -= _amount;
		totalDeposit -= _amount;
		msg.sender.call.value(_amount)();
	}
	
	function getTotalBalance() public view returns(uint){
	    return totalDeposit;
	}
	
	function getBalance(address _account) public view returns(uint){
	    return balanceOf[_account];
	}
}