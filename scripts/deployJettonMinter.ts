import {toNano} from '@ton/core';
import {JettonMinter} from '../wrappers/JettonMinter';
import {compile, NetworkProvider} from '@ton/blueprint';
import {jettonWalletCodeFromLibrary, promptUrl, promptUserFriendlyAddress} from "../wrappers/ui-utils";

export async function run(provider: NetworkProvider) {
    const isTestnet = provider.network() !== 'mainnet';

    const ui = provider.ui();
    const jettonWalletCodeRaw = await compile('JettonWallet');

    const adminAddress = await promptUserFriendlyAddress("Enter the address of the jetton owner (admin):", ui, isTestnet);

    const jettonMetadataUri = await promptUrl("Enter jetton metadata uri (https://jettonowner.com/jetton.json)", ui)

    const jettonWalletCode = jettonWalletCodeFromLibrary(jettonWalletCodeRaw);

    const minter = provider.open(JettonMinter.createFromConfig({
            admin: adminAddress.address,
            wallet_code: jettonWalletCode,
            jetton_content: {type: 1, uri: jettonMetadataUri}
        },
        await compile('JettonMinter'))
    );

    await minter.sendDeploy(provider.sender(), toNano("1.5")); // send 1.5 TON
}