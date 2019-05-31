import React, {Component} from 'react';

export default class Tokens extends Component {

  constructor(props) {
    super(props);
    this.getCorgis = this.getCorgis.bind(this);
    this.state = {
      loaded: false,
      corgis: [],
      newCorgiName: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    let accountId = window.nearlib.dev.myAccountId
    this.getCorgis(accountId).then(res => {
      if (res == null || res.corgis.length < 1 || res.corgis == null) {
        this.setState({
          loaded: true
        });
      } else {
        this.setState({
          corgis: res.corgis,
          loaded:true
        });
      }
    })
  }

  getCorgis(owner) {
    return this.props.contract.getCorgisByOwner({ owner: owner });
  }

  getCorgi(tokenId) {
    return this.props.contract.getCorgi({ tokenId: tokenId })
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  randomInt() {
    return Math.floor(Math.random() * 10000000) + 1;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loaded:false });
    this.props.contract.createRandomCorgi({
      name: this.state.newCorgiName,
      seed: this.randomInt()
    }).then(res => {
      // set the returned corgi to display in the frontend
      let corgi = res.lastResult;
      this.setState(state => {
        let corgis = state.corgis.concat(corgi);
        return {
          newCorgiName: "",
          loaded: true,
          corgis:corgis
        }
      })
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    console.log("called")
    if (this.state.loaded && this.state.corgis.length > 0) {
      let corgiComponents = this.state.corgis.map(corgi => {
        return(
          <li key= {corgi.dna}>
            <Corgi key = {corgi.dna}
                   name = {corgi.name}
                   color = {corgi.color}/>
          </li>
        )
      })
      return(
        <div>
          <input id="newCorgiName" type="text" placeholder="Corgi name" onChange={this.handleChange} value={this.state.newCorgiName} />
          <button onClick={this.handleSubmit}>Create Corgi!</button>
          <ul>
            { corgiComponents }
          </ul>
        </div>
      )
    } else if (!this.state.loaded) {
      return <p>Loading...</p>
    } else {
      return (
        <div>
          <p>Create a corgi!</p>
          <input id="newCorgiName" type="text" placeholder="Corgi name" onChange={this.handleChange} value={this.state.newCorgiName} />
          <button onClick={this.handleSubmit}>Create Corgi!</button>
        </div>
      )
    }
  }
}

// function Button(props) {
//   return(
//     <div>
//       <button onClick={props.login()}>Login</button>
//     </div>
//   )
// }

class Corgi extends Component {
  render () {
    let specificColor = { backgroundColor: this.props.color };
    return (
      <div className="wrapper">
        <div className="resize" id="corgi_wrap">
          <div className="corgi_head_area">
            <div className="fuwa corgi_face_area">
              <div style={specificColor} className="corgi_face_before"></div>
              <div className="corgi_face white">
                <div style={specificColor} className="corgi_face_after"></div>
                <div className="eye-left"></div>
                <div className="eye-right"></div>
                <div className="corgi_nose white">
                  <div className="nose"></div>
                </div>
                <div style={specificColor} className="ear-left brown"></div>
                <div style={specificColor} className="ear-right brown"></div>
              </div>
            </div>
            <div className="corgi_breast white">
            </div>
            <div style={specificColor} className="leg_fr_left brown"></div>
            <div style={specificColor} className="leg_fr_right brown"></div>
          </div>
          <div className="corgi_body_area">
            <div style={specificColor} className="corgi_body brown"></div>
          </div>
          <div className="corgi_tail_area">
            <div style={specificColor} className="corgi_hip brown" id="hip">
              <div style={specificColor} className="corgi_hip_after"></div>
              <div style={specificColor} className="leg_ba_left brown"></div>
              <div style={specificColor} className="leg_ba_right brown"></div>
            </div>
          </div>
        </div>
        <div className="note">Drag for length</div>
        <div className="note">{this.props.name}</div>
      </div>
    )
  }
}
