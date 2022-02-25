import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyApp() {
  return (
    <div>
      <NavPanel />
      <MainAppBody />
    </div>
  );
}


const NavPanel = () => {
  return (
    <div className='nav'>
      <p className='greeting'>Welcome <span>Olamide</span></p>
      <p class="welcome">Log in to get started</p>
      {/* <img src="logo.png" alt="Logo" class="logo" /> */}
      <form class="login">
        <input
          type="text"
          placeholder="user"
          class="login__input login__input--user"
        />
        <input
          type="text"
          placeholder="PIN"
          maxlength="4"
          class="login__input login__input--pin"
        />
        <button class="login__btn">&rarr;</button>
      </form>
    </div>
  )
}

const MainAppBody = () => {
  return (
    <div class="app">
      <AcctBal></AcctBal>
      <TransactionFlow />
      <AcctSummary />
      <Activities />
    </div>
  );
}

const AcctBal = () => {
  return (
    <div className="balance">
        <div>
          <p className="balance__label">Account Balance</p>
          <p class="balance__date">
            <span class="date">23/02/2022</span>
          </p>
        </div>
        <p class="balance__value">&#8358;0</p>
      </div>
  )
}

const TransactionFlow = () => {
  return (
    <div class="movements">
      <div class="movements__row">
        <div class="movements__type movements__type--credit">2 credit</div>
        <div class="movements__date">Yesterday</div>
        <div class="movements__value">&#8358;40,000</div>
      </div>
      <div class="movements__row">
        <div class="movements__type movements__type--debit">1 debit</div>
        <div class="movements__date">14/02/2021</div>
        <div class="movements__value">&#8358;3,780</div>
      </div>
    </div>
  );
}

const AcctSummary = () => {
  return (
    <div class="summary">
      <p class="summary__label">Credit</p>
      <p class="summary__value summary__value--in">&#8358;0</p>
      <p class="summary__label">Debit</p>
      <p class="summary__value summary__value--out">&#8358;0</p>
      {/* <p class="summary__label">Interest</p>
      <p class="summary__value summary__value--interest">&#8358;0</p> */}
      <button class="btn--sort">&downarrow; SORT</button>
    </div>
  );
}

const Activities = () => {
  return (
    <div className='activities'>
      <Transfer />
      <Receive />
      <DeleteAcct />
    </div>
  );
}

const Transfer = () => {
  return (
    <div class="operation operation--transfer">
      <h2>Transfer money</h2>
      <form class="form form--transfer">
        <input type="text" class="form__input form__input--to" />
        <input type="number" class="form__input form__input--amount" />
        <button class="form__btn form__btn--transfer">&rarr;</button>
        <label class="form__label">Transfer to</label>
        <label class="form__label">Amount</label>
      </form>
    </div>
  )
}

const Receive = () => {
  return (
    <div class="operation operation--loan">
      <h2>Get Overdarft</h2>
      <form class="form form--loan">
        <input type="number" class="form__input form__input--loan-amount" />
        <button class="form__btn form__btn--loan">&rarr;</button>
        <label class="form__label form__label--loan">Amount</label>
      </form>
    </div>
  );
}

const DeleteAcct = () => {
  return (
    <div class="operation operation--close">
      <h2>Close account</h2>
      <form class="form form--close">
        <input type="text" class="form__input form__input--user" />
        <input
          type="password"
          maxlength="6"
          class="form__input form__input--pin"
        />
        <button class="form__btn form__btn--close">&rarr;</button>
        <label class="form__label">Confirm user</label>
        <label class="form__label">Confirm PIN</label>
      </form>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));


