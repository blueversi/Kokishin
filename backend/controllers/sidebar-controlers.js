const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const router = require('../routes/articles-routes');

const SidebarItem = require('../models/sidebarItem');
const sidebarItem = require('../models/sidebarItem');

/* TMP */
const sidebarItems = [
  {
    title: 'Przykładowy tytuł ciekaowstki',
    content:
      "<div class='topic-recomendations'><img src='../img/sidebar/sidebar-recomend-bonsai.webp' alt='obrazek w sidebarze' /><div class='topic-recomendations-title'>Bonsai</div> <div class='topic-recomendations-description'> W tym dziale znajdziesz ciekawostki związane z zajmowaniem się drze... </div> </div> <div class='topic-recomendations'> <img src='../img/sidebar/sidebar-recomend-cat.webp' alt='obrazek w sidebarze' /> <div class='topic-recomendations-title'> <a href='/koty/'>Koty</a> </div> <div class='topic-recomendations-description'> Wszystko o kotach, pielęgnacja, gatunki, filmiki, zdjęcia. </div> </div> <div class='topic-recomendations'> <img src='../img/sidebar/sidebar-recomend-programing.webp' alt='obrazek w sidebarze' /> <div class='topic-recomendations-title'> <a href='/programowanie/'>Programowanie</a> </div> <div class='topic-recomendations-description'> Najnowsze informacje z branży, tu dowiesz się o nowych bibliotekach i... </div> </div> <div class='topic-recomendations'> <img src='../img/sidebar/sidebar-recomend-genetics.webp' alt='obrazek w sidebarze' /> <div class='topic-recomendations-title'> <a href='/genetyka/'>Genetyka</a> </div> <div class='topic-recomendations-description'> Rozwój i osiągnięcia w genetyce. Nowe sekwencje, sposoby identyfikacji itp. </div> </div> <div class='topic-recomendations'> <img src='../img/sidebar/sidebar-recomend-android.webp' alt='obrazek w sidebarze' /> <div class='topic-recomendations-title'> <a href='/android/'>Android</a> </div> <div class='topic-recomendations-description'> Od tworzenia aplikacji po aktualizacje i ich porówniania </div> </div>",
    position: 1,
  },
  {
    title: 'Najciekawsze dziś',
    content:
      "<div class='top-today'> <ol> <li> <a href='/ciekawostka/nazwadzialu/data/Powodzenie-misji-spacex/'> Powodzenie misji SpaceX! </a> </li> <li> <a href='/ciekawostka/nazwadzialu/data/bonsai-z-nasiona-jak/'> Bonsai z nasiona. Jak? </a> </li> <li> <a href='/ciekawostka/nazwadzialu/data/Nowy-algorytm-przyspiesza-analize-dna/'> Nowy algorytm przyśpiesza analize DNA </a> </li> <li> <a href='/ciekawostka/nazwadzialu/data/Szyfr-zodiaka-zlamany-tresc-listu-odkryta-po-60-latach/'> Szyfr zodiaka złamany. Treść listu odkryta po 60 latach </a> </li> <li> <a href='/ciekawostka/nazwadzialu/data/dlaczego-procesor-m1-jest-najlepszy/'> Dlaczego procesor M1 jest najlepszy? </a> </li> </ol> </div>",
    position: 2,
  },
  {
    title: 'Przykładowy tytuł ciekaowstki',
    content:
      "<br /> <a href='/About'>O nas</a> <br /> <a href='/Ads'>Reklama</a> <br /> <a href='/Privacy_Politic'>Polityka prywatności</a> <br /> <a href='/Contact'>Kontakt</a> <br /> <br /> Kokishin <i class='far fa-copyright'></i> 2021. Wszelkie prawa zastrzeżone.",
    position: 3,
  },
];

/* GET all sidebar items */

const getAllSidebarItems = async (req, res, next) => {
  let sidebarItems;
  try {
    sidebarItems = await sidebarItem.find();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong. Cannot get sidebar items'
    );
  }
  res.status(200).json(sidebarItems);
};

//Exporty
exports.getAllSidebarItems = getAllSidebarItems;
