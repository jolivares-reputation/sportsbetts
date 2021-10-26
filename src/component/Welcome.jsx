import react from 'react'

class Welcome extends react.Component {

    constructor(props){
      super(props);
      this.state = { data2: "hello2" };
    }

    render() {
      return (
        <div>
          <h1>Hello, {this.props.name}</h1>
          {this.state.data2}
        </div>
      );
    }
    componentDidMount() {
      
      var apiUrl =  "https://api.the-odds-api.com/v4/sports/basketball_nba/odds?markets=spreads&regions=us&apiKey=" + process.env.REACT_APP_ODDS_API_KEY
      fetch(apiUrl)
        .then(response => response.json())
        //.then(data => this.setState({data2: data.total}))
        .then(data => console.log(data))
    }
  }


export default Welcome;