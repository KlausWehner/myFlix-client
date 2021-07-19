import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

//telling React to create a new MainView component using the generic React.Component template as its foundation:
export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [
        { _id: 1, Title: 'Gladiator', Description: 'desc1...', ImagePath: '../../../img/gladiator.jpg'},
        { _id: 2, Title: 'Alien', Description: 'desc2...', ImagePath: '...'},
        { _id: 3, Title: 'Gladiator', Description: 'desc3...', ImagePath: '...'}
      ]
    }
  }


  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }



  render() {
    const { movies, selectedMovie } = this.state;
  
    if (selectedMovie) return <MovieView movie={selectedMovie} />;
  
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }

  
}