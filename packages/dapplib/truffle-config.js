require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture stool rice sad smile idea praise army gate'; 
let testAccounts = [
"0xb5e5b472de9ece7d97a745e8f8970691b84ca9eb04c6736fd07f76580648bfc2",
"0x0fe369b200aa0fd02279c51c9c12ab5bc06e492c7df94f00abe85bdfc482a573",
"0x04937de2558bc210ee422f66b31af0b1f7f05128a34321fe2abe6871c2ade3c9",
"0x8b24fa902a8a9dd555bb900fcbd0e04a9a7f7e1d57567e7f67b2e30517626a38",
"0x4f883f568519c4d8cf4743b1995a7dd19776c645246a7e3ef14a1931703a6ea0",
"0x6eb1173cf6bab55a49810712eaa482d24b7ffaa0432e8e245f245ca2a32ce566",
"0x856a66041efc556278b826c449a5c7a8a279cd93070d2cf0cc5a01366ab0bdb1",
"0x435e18b62fc5daf44ce24707b6a5250989769727ae909a6ab27ab2f7c07ad527",
"0x29f5ed4cbfd54393e6a6ccae20d93634bbb47a8d06062acf32fed498808a276f",
"0xe8393c243d5b8905b6bae6fa331c1c33c6c8e3a454866420559b4b8bdf6d3def"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


