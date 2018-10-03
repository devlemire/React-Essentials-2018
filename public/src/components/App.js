import React, { Component } from 'react'
import moviesJSON from '../utils/movies.json'
import './App.css'
import InfoCircle from './InfoCircle/InfoCircle'

class App extends Component {
  state = {
    goal: 100,
    movies: moviesJSON
  }

  render() {
    const { movies, goal } = this.state

    let favorites_count = 0
    let hates_count = 0

    // Use a forEach to avoid looping through the entire array
    // for both counts
    movies.forEach(m => {
      if (m.favorite) {
        favorites_count++
      } else if (m.hate) {
        hates_count++
      }
    })

    return (
      <div className="App">
        <header>
          <span>Movie Counter</span>
        </header>

        <section id="info">
          <InfoCircle num={goal} label="Goal" borderColor="#ffd603" />

          <InfoCircle num={movies.length} label="Watched" />

          <InfoCircle
            num={favorites_count}
            label="Favorites"
            borderColor="#07af41"
          />

          <InfoCircle num={hates_count} label="Hates" borderColor="#cb2331" />
        </section>

        <section id="statistics">
          <span>I am statistics</span>
        </section>
      </div>
    )
  }
}

export default App
