// SPDX-License-Identifier: BUSL-1.1

pragma solidity >=0.4.22 <0.9.0;

interface IPermittedAirdrops {
    function isValidAirdrop(bytes memory _addressSig)
        external
        view
        returns (bool);
}
