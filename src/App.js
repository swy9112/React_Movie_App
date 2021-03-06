import React, {Component} from 'react';
import './style/App.scss'
import Movie from './Movie';

class App extends Component {

  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie,index)=> {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={index} />
    });
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/movie_suggestions.json?movie_id=2413')
    .then(potato => potato.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  _loadingPage = () => {
    return (
      <div className='loader_bg'>
        <div className='loader'></div>
      </div>
    )
  }

  render(){
    return (
      <div className='App clearFix'>
        {this.state.movies ? this._renderMovies() : this._loadingPage()}
      </div>
    );
  }

}

export default App;
