import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
    render(){
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <MovieTitle title={this.props.title} />
            </div>
        );
    }
}

function MoviePoster(props){
    return (
        <img src={props.poster} alt=''/>
    );
}
function MovieTitle(props){
    return (
        <h1>{props.title}</h1>
    );
}

export default Movie