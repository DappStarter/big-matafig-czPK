require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender suspect blanket cost often coconut coral light army gauge'; 
let testAccounts = [
"0x9b999750277a31059c3879678f10076b57185cc7648477853a7d61ae21ab16ba",
"0x708826322e588322e486acecb84300a425da8e0e919c1f16e632b26cbcda145e",
"0x00ba837cf161f5972da84320b95ea7228680755386a9713dd4194be2fb3d7bed",
"0xd07baf9bb9ba9980b7150fcbc2e0d09163070b53aea3cd2973a4a15bef7fa85a",
"0x2b105c00e1844bd4523f1435d4384e2cfc3e75f6379645b6e0dba53c507b4018",
"0x610fd8f6e08163d2794131fff71086b53770a1da69d4de0978a35b456ca2289e",
"0x6cc5105a36b383d020acc742cd3fb7d1a6582bbfba0f5409fc17900b7225250b",
"0x1ce624cce783bf2708ca85c7482d4f48a7d306b0fda9e53279238a70c3fcd0f2",
"0xe69170ffbe237d5f8ce2be1e1b4f4fceb619b691a2df126e552b5f31eaa12f88",
"0x7bc7a853cb82162f573733d7bc6f4fd317568fd348ede570b6395a3998f529a7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

