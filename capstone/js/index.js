import { films } from "/data/ghibli.js";

function getFilms(x) {
  setTimeout(() => {
    let filmsArr = [];
    x.forEach((film) => {
      filmsArr += film;
      //console.log(film);
      let figure = document.createElement("figure");
      let poster = document.createElement("img");
      let caption = document.createElement("figcaption");
      figure.setAttribute("id", `${film.id}`);
      poster.src = film.image;
      caption.innerText = film.title;

      figure.appendChild(poster);
      figure.appendChild(caption);

      // When the user clicks on the button, open the modal
      poster.addEventListener("click", () => popModal(figure.id, films));

      console.log(figure.id);

      document.querySelector("#mainDiv").appendChild(figure);
    });
  }, 2000);
}

getFilms(films);

function popModal(id) {
  modal.style.display = "block";
  films.find((film) => {
    if (film.id === id) {
      document.querySelector(
        "#modalTitle"
      ).innerHTML = `English Title: ${film.title}<br>Japanese Title: ${film.original_title}<br>Romanised Title: ${film.original_title_romanised}`;
      document.querySelector("#modalImage").src = film.image;
      document.querySelector("#modalInfo").innerHTML = `Director: ${
        film.director
      }<br>Producer: ${film.producer}<br>Release Date: ${
        film.release_date
      }<br>Run Time: ${timeConvert(film.running_time)}`;
      document.querySelector('#score').textContent = `${film.rt_score}%`
      document.querySelector('#trailer').src = film.trailer
      document.querySelector('#videoDescription').textContent = film.description
    }
  });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function timeConvert(n) {
  let hours = n / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);

  return `${rhours} Hours ${rminutes} Minutes`;
}
