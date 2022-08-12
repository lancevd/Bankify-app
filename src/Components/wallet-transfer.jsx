import React from 'react'

const WalletTransfer = () => {
  return (
    <div>
      <h4> Wallet to Wallet</h4>
      <form action="" method="">
        <label htmlFor="">Enter Wallet Number</label> <br />
        <input type="number" name="wallet-id" id="" required />
        <br />
        <br />
        <label htmlFor="">Enter Amount</label>
        <br />
        <input type="number" name="wallet-amount" id="" required />
        <br />
        <br />
        <button type="submit">Send</button>
      </form>

      <h4>Wallet to Bank</h4>
      <form action="" method="">
        <label htmlFor="">Select Bank</label> <br />
        <select required>
          <option value=""></option>
          <option value="Access">Access</option>
          <option value="uba">UBA</option>
          <option value="gtb">GTB</option>
          <option value="firsr">First Bank</option>
          <option value="polaris">Polaris Bank</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Account Number</label> <br />
        <input type="number" name="wallet-id" id="" required />
        <br />
        <br />
        <label htmlFor="">Enter Amount</label>
        <br />
        <input type="number" name="wallet-amount" id="" required />
        <br />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default WalletTransfer;