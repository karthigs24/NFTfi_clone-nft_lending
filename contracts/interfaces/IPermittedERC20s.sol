// SPDX-License-Identifier: BUSL-1.1

pragma solidity >=0.4.22 <0.9.0;

interface IPermittedERC20s {
    function getERC20Permit(address _erc20) external view returns (bool);
}
