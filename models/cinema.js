const Cinema = function (films) {
  this.films = films
}

Cinema.prototype.getFilmTitles = function () {
  let filmTitles = []
  this.films.forEach((film) => {
    filmTitles.push(film.title)
  })
  return filmTitles
}

Cinema.prototype.filterFilmsByGenre = function (genre) {
  //let filmsByGenre = []
  const result = this.films.filter((film) => {
    return film.genre === genre
   // filmsByGenre.push(film)
  })
   return result
}

Cinema.prototype.findFilmByTitle = function (title) {
  const result = this.films.filter((film) => {
    return film.title === title
  })
  return result
}

Cinema.prototype.findFilmByYear = function (year) {
  const result = this.films.filter((film) => {
    return film.year === year
  })
  return result
}

Cinema.prototype.noFilmByYear = function (year) {
  const result = this.films.filter((film) => {
    return film.year === year
  })
  return Boolean(result.length)
  //or !!(result.length)
  // or if else statement 
}

Cinema.prototype.filmOverLength = function (input_time) {
  const result = this.films.every((film) => {
    return film.length > input_time
  })
   return result
}

Cinema.prototype.totalFilmTime = function() {
  let totalTime = 0
  const result = this.films.forEach((film) =>{
    totalTime += film.length
})
return totalTime
} 






module.exports = Cinema
