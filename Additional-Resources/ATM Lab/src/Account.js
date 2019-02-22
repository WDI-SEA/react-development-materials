import React, { Component } from 'react';

export default class Account extends Component {
  state = {
    balance: 0,
    value: ''
  }

  handleDepositClick = (e) => {
    e.preventDefault();
    console.log(isNaN(parseInt(e.target.value, 10)));
    if (isNaN(e.target.value)) {
      this.setState({value: ''});
    } else {
      const newBalance = this.state.balance + parseInt(this.state.value, 10);
      this.setState({
        balance: newBalance,
        value: ''
      });
    }
  }

  onChangeHandler = (e) => {
    if (e.target.value >= 0) {
      this.setState({ value: e.target.value });
    }
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
      </div>
    )
  }
}
