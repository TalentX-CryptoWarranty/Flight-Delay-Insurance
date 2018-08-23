pragma solidity ^0.4.24

import "./Ownable.sol";
import "./FlightDelayControlledContractTest.sol";
import "./FlightDelayConstants.sol";

contract FlightDelayContractControllerTest is Ownable, FlightDelayConstants {
    
    struct Controller {address addr; bool isContorolled; bool isInitialized}

    mapping (bytes32 => Controller) public contracts;
    bytes32[] public contractIds;

    function FlightDelayController {
        registerContract(owner, "FD.owner", false);
        registerContract(address(this), "FD.Controller", false);
    }
}