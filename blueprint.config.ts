import { Config } from '@ton/blueprint';

export const config: Config = {
    network: {
        endpoint: 'https://ton-testnet.core.chainstack.com/.../api/v2/jsonRPC',
        type: 'testnet',
        version: 'v2',
        // key: 'YOUR_API_KEY',
    },
};