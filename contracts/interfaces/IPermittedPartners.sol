// SPDX-License-Identifier: BUSL-1.1

pragma solidity >=0.4.22 <0.9.0;

interface IPermittedPartners {
    function getPartnerPermit(address _partner) external view returns (uint16);
}
