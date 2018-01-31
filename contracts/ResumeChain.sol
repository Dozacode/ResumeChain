pragma solidity ^0.4.2;

contract ResumeChain {
  address public owner;
  uint public start_employment;

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function Migrations() public {
    owner = msg.sender;
  }
}
