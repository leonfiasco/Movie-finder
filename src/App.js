import React, { Component } from 'react';
import Nav from './components/Nav';
import SearchArea from './components/SearchArea';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';


import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      inputText: '',
      totalResults: 0,
      currentPage: 1

    }
    this.apiKey = process.env.REACT_APP_API;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.inputText}`)
    .then(data => data.json())
    .then(data => {this.setState({ movies:[...data.results], totalResults: data.total_results })
    })
  }

  handleChange = (e) => {
   this.setState({ inputText: e.target.value })
  }


  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.inputText}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {this.setState({ movies:[...data.results], currentPage: pageNumber })
    })
  }

    render() { 
      const numberPages = Math.floor(this.state.totalResults / 20);           
      return (
        <div className="App">
            <Nav />
            <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            <MovieList movies={this.state.movies} />
            {
              this.state.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''
            }
        </div>
      );
    }
  }


export default App;
