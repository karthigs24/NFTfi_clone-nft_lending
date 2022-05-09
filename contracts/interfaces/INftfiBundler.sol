// SPDX-License-Identifier: BUSL-1.1

pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./IERC998ERC721TopDown.sol";

interface INftfiBundler is IERC721 {
    function safeMint(address _to) external returns (uint256);

    function decomposeBundle(uint256 _tokenId, address _receiver) external;
}
