import {FimlType} from '../types/FilmType';
import {RatingDescription} from '../types/RatingDescription';

export function getFilmById(filmId: number): FimlType | undefined {
  return mockFilms.find<FimlType>((film): film is FimlType => film.id === filmId);
}

export const mockSelectedFilm: FimlType = {
  id: 1,
  title: 'The Grand Budapest Hotel',
  img: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImg: 'img/bg-the-grand-budapest-hotel.jpg',
  posterImg: 'img/the-grand-budapest-hotel-poster.jpg',
  genre: 'Drama',
  year: 2014,
  description: 'Description',
  rating: 8.7,
  ratingDescription: RatingDescription.VERY_GOOD,
  votesCount: 100,
  director: 'Director',
  actors: ['Actor', 'Actor'],
  duration: 120,
  link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
};

export const mockFilms: FimlType[] = [
  {
    id: 2,
    title: 'Fantastic Beasts: The Crimes of Grindewald',
    img: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImg: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    posterImg: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    genre: 'Sci-Fi',
    year: 2020,
    description: 'Description',
    rating: 8.7,
    ratingDescription: RatingDescription.VERY_GOOD,
    votesCount: 100,
    director: 'Director',
    actors: ['Actor', 'Actor'],
    duration: 120,
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 3,
    title: 'Bohemian Rhapsody',
    img: 'img/bohemian-rhapsody.jpg',
    backgroundImg: 'img/bohemian-rhapsody.jpg',
    posterImg: 'img/bohemian-rhapsody.jpg',
    genre: 'Fantasy',
    year: 2020,
    description: 'Description',
    rating: 8.7,
    ratingDescription: RatingDescription.VERY_GOOD,
    votesCount: 100,
    director: 'Director',
    actors: ['Actor', 'Actor'],
    duration: 120,
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 4,
    title: 'Macbeth',
    img: 'img/macbeth.jpg',
    backgroundImg: 'img/macbeth.jpg',
    posterImg: 'img/macbeth.jpg',
    genre: 'Drama',
    year: 2020,
    description: 'Description',
    rating: 8.7,
    ratingDescription: RatingDescription.VERY_GOOD,
    votesCount: 100,
    director: 'Director',
    actors: ['Actor', 'Actor'],
    duration: 120,
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 5,
    title: 'Aviator',
    img: 'img/aviator.jpg',
    backgroundImg: 'img/aviator.jpg',
    posterImg: 'img/aviator.jpg',
    genre: 'Drama',
    year: 2020,
    description: 'Description',
    rating: 8.7,
    ratingDescription: RatingDescription.VERY_GOOD,
    votesCount: 100,
    director: 'Director',
    actors: ['Actor', 'Actor'],
    duration: 120,
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 6,
    title: 'We need to talk about Kevin',
    img: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundImg: 'img/we-need-to-talk-about-kevin.jpg',
    posterImg: 'img/we-need-to-talk-about-kevin.jpg',
    genre: 'Fantasy',
    year: 2020,
    description: 'Description',
    rating: 8.7,
    ratingDescription: RatingDescription.VERY_GOOD,
    votesCount: 100,
    director: 'Director',
    actors: ['Actor', 'Actor'],
    duration: 120,
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 7,
    title: 'What We Do in the Shadows',
    img: 'img/what-we-do-in-the-shadows.jpg',
    backgroundImg: 'img/what-we-do-in-the-shadows.jpg',
    posterImg: 'img/what-we-do-in-the-shadows.jpg',
    genre: 'Fantasy',
    year: 2020,
    description: 'Description',
    rating: 8.7,
    ratingDescription: RatingDescription.VERY_GOOD,
    votesCount: 100,
    director: 'Director',
    actors: ['Actor', 'Actor'],
    duration: 120,
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 8,
    title: 'Revenant',
    img: 'img/revenant.jpg',
    backgroundImg: 'img/revenant.jpg',
    posterImg: 'img/revenant.jpg',
    genre: 'Fantasy',
    year: 2020,
    description: 'Description',
    rating: 8.7,
    ratingDescription: RatingDescription.VERY_GOOD,
    votesCount: 100,
    director: 'Director',
    actors: ['Actor', 'Actor'],
    duration: 120,
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 9,
    title: 'Johnny English',
    img: 'img/johnny-english.jpg',
    backgroundImg: 'img/johnny-english.jpg',
    posterImg: 'img/johnny-english.jpg',
    genre: 'Fantasy',
    year: 2020,
    description: 'Description',
    rating: 8.7,
    ratingDescription: RatingDescription.VERY_GOOD,
    votesCount: 100,
    director: 'Director',
    actors: ['Actor', 'Actor'],
    duration: 120,
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: 10,
    title: 'Orlando',
    img: 'img/orlando.jpg',
    backgroundImg: 'img/orlando.jpg',
    posterImg: 'img/orlando.jpg',
    genre: 'Fantasy',
    year: 2020,
    description: 'Description',
    rating: 8.7,
    ratingDescription: RatingDescription.VERY_GOOD,
    votesCount: 100,
    director: 'Director',
    actors: ['Actor', 'Actor'],
    duration: 120,
    link: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  }
];
