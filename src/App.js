import React from "react";
import "./App.css";
import { NewsFeed } from "./NewsFeed";

import { getData, getMoreData } from './api'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    getData.then(data => {
      this.setState({
        data: data
      }, () => {
        let that = this;
        //Add lazy load observer
        var listElm = document.querySelector('#infinite-list');
        listElm.addEventListener('scroll', function () {
          if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {

            getMoreData().then(data => {
              that.setState({
                data: [...that.state.data, ...data]
              })

            }).catch(e => {
              console.log("End of news")
            })

          }
        });


      })
    }

    )
  }



  render() {
    return (
      <div className="App">
        <NewsFeed news={this.state.data} />
      </div>
    );
  }

}

export default App;
