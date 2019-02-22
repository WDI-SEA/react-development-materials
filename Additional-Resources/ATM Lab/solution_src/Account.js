import React, { Component } from 'react';

export default class Account extends Component {
  state = {
    balance: 0,
    value: ''
  }

  handleDepositClick = (e) => {
    e.preventDefault();
    const newBalance = this.state.balance + parseInt(this.state.value, 10);
    this.setState({
      balance: newBalance,
      value: ''
    });
  }

  handleWithdrawalClick = (e) => {
    e.preventDefault()
    if (isNaN(this.state.value) || this.state.value < 0) {
      console.log("Not a number");
    }
    else {
      const amount = +this.state.value;
      let newBalance = this.state.balance - amount;
      if (newBalance < 0) {
        newBalance = 0;
      }
      this.setState({
        balance: newBalance
      });
    }
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="number" placeholder="enter an amount" value={this.state.value} onChange={this.onChangeHandler}/>
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawalClick} />
      </div>
    )
  }
}
