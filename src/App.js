import React, { Component } from 'react';
import Nav from './components/Nav';
import './App.css';
import SearchArea from './components/SearchArea';
import MovieList from './components/MovieList';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      inputText: ''
    }
    this.apiKey = process.env.REACT_APP_API;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.inputText}`)
    .then(data => data.json())
    .then(data => {this.setState({ movies:[...data.results] })
    })
  }

  handleChange = (e) => {
   this.setState({ inputText: e.target.value })
  }


  render() {     
    return (
      <div className="App">
          <Nav />
          <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
          <MovieList movies={this.state.movies} />
      </div>
    );
  }
  }


export default App;
