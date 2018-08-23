pragma solidity ^0.4.24;


//Ownable은 소유자 주소와 컨트롤허가를 포함합니다.
contract Ownable {
    address public owner;
    address addr;

    mapping (address => bool) owners;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event OwnershipExtended(address indexed host, address indexed guest);

    modifier onlyOwner() {
        require(owner == msg.sender);
        _;
    }
    
    constructor () public {
        owners[msg.sender] = true;
    }

    function addOwner(address guest) public onlyOwner {
        require(guest != address(0));
        owners[guest] = true;
        emit OwnershipExtended(msg.sender, guest);
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0));
        owners[newOwner] = true;
        delete owners[msg.sender];
        emit OwnershipTransferred(msg.sender, newOwner);
    }

    function getAddress() public view returns (address _addr) {
        return addr;
    }

    function setAddress(address _addr) {
        require(msg.sender == owner);
        addr = _addr;
    }
}

}