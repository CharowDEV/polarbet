const getCurrentAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}

export const AddBet = async (bet: number) => {
    const account = await getCurrentAccount();
    window.contract.methods.addBet(bet).send({ from: account });
};

