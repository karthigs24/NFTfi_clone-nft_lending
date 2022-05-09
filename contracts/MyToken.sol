// SPDX-License-Identifier: MIT
pragma solidity >=0.4.18 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTC") {
        _mint(msg.sender, 1000000000000 * (10**uint256(decimals())));
    }
}
