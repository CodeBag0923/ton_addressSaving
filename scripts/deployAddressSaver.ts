import { address, toNano } from '@ton/core';
import { AddressSaver } from '../wrappers/AddressSaver';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const addressSaver = provider.open(AddressSaver.createFromConfig({manager:address("EQC4tYtumFgvZpAi6nKqIKbhZDf2S29EOI7T1SAVDeqtCZ4i")}, await compile('AddressSaver')));

    await addressSaver.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(addressSaver.address);

    // run methods on `addressSaver`
}
