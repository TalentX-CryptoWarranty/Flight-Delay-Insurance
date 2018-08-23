pragma solidity ^0.4.24;

contract FlightDelayControllerInterface {

    function isOwner(address _addr) returns (bool _isOwner);

    function selfRegister(bytes32 _id) returns (bool result);

    function getContract(bytes32 _id) returns (address _addr);
}