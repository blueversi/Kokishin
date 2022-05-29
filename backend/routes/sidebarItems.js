var express = require('express');
var router = express.Router();

/* TMP */
const sidebarItems = [
  {
    title: 'Przykładowy tytuł ciekaowstki',
    content:
      "<div className='topic-recomendations'><img src='../img/sidebar/sidebar-recomend-bonsai.webp' alt='obrazek w sidebarze' /><div className='topic-recomendations-title'>Bonsai</div> <div className='topic-recomendations-description'> W tym dziale znajdziesz ciekawostki związane z zajmowaniem się drze... </div> </div> <div className='topic-recomendations'> <img src='../img/sidebar/sidebar-recomend-cat.webp' alt='obrazek w sidebarze' /> <div className='topic-recomendations-title'> <a href='/koty/'>Koty</a> </div> <div className='topic-recomendations-description'> Wszystko o kotach, pielęgnacja, gatunki, filmiki, zdjęcia. </div> </div> <div className='topic-recomendations'> <img src='../img/sidebar/sidebar-recomend-programing.webp' alt='obrazek w sidebarze' /> <div className='topic-recomendations-title'> <a href='/programowanie/'>Programowanie</a> </div> <div className='topic-recomendations-description'> Najnowsze informacje z branży, tu dowiesz się o nowych bibliotekach i... </div> </div> <div className='topic-recomendations'> <img src='../img/sidebar/sidebar-recomend-genetics.webp' alt='obrazek w sidebarze' /> <div className='topic-recomendations-title'> <a href='/genetyka/'>Genetyka</a> </div> <div className='topic-recomendations-description'> Rozwój i osiągnięcia w genetyce. Nowe sekwencje, sposoby identyfikacji itp. </div> </div> <div className='topic-recomendations'> <img src='../img/sidebar/sidebar-recomend-android.webp' alt='obrazek w sidebarze' /> <div className='topic-recomendations-title'> <a href='/android/'>Android</a> </div> <div className='topic-recomendations-description'> Od tworzenia aplikacji po aktualizacje i ich porówniania </div> </div>",
    position: 1,
  },
  {
    title: 'Najciekawsze dziś',
    content:
      "<div className='top-today'> <ol> <li> <a href='/ciekawostka/nazwadzialu/data/Powodzenie-misji-spacex/'> Powodzenie misji SpaceX! </a> </li> <li> <a href='/ciekawostka/nazwadzialu/data/bonsai-z-nasiona-jak/'> Bonsai z nasiona. Jak? </a> </li> <li> <a href='/ciekawostka/nazwadzialu/data/Nowy-algorytm-przyspiesza-analize-dna/'> Nowy algorytm przyśpiesza analize DNA </a> </li> <li> <a href='/ciekawostka/nazwadzialu/data/Szyfr-zodiaka-zlamany-tresc-listu-odkryta-po-60-latach/'> Szyfr zodiaka złamany. Treść listu odkryta po 60 latach </a> </li> <li> <a href='/ciekawostka/nazwadzialu/data/dlaczego-procesor-m1-jest-najlepszy/'> Dlaczego procesor M1 jest najlepszy? </a> </li> </ol> </div>",
    position: 2,
  },
  {
    title: 'Przykładowy tytuł ciekaowstki',
    content:
      "<br /> <a href='/About'>O nas</a> <br /> <a href='/Ads'>Reklama</a> <br /> <a href='/Privacy_Politic'>Polityka prywatności</a> <br /> <a href='/Contact'>Kontakt</a> <br /> <br /> Kokishin <i className='far fa-copyright'></i> 2021. Wszelkie prawa zastrzeżone.",
    position: 3,
  },
];

/* GET Sidebar items. */
router.get('/', function (req, res, next) {
  res.status(200).json(sidebarItems);
});

module.exports = router;