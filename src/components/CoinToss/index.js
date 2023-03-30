import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    number: 0,
    total: 0,
    heads: 0,
    tails: 0,
  }

  OnClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({number: tossResult})
    this.setState(prevState => ({total: prevState.total + 1}))

    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {number, total, heads, tails} = this.state
    const imgSrc =
      number === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="main-div">
        <div className="div-deco">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imgSrc} alt="toss result" className="img-deco" />
          <div>
            <button type="button" onClick={this.OnClickTossCoin}>
              Toss Coin
            </button>
          </div>
          <div className="small-div">
            <p className="para-deco">Total: {total}</p>
            <p className="para-deco">Heads: {heads}</p>
            <p className="para-deco">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
