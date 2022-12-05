'use strict'

var gProjs

function init() {
  _createProjs()
}

function getProjs() {
  return gProjs
}

function _createProjs() {
  gProjs = [
    _createProj(
      'littleCrown',
      'The Little Crown',
      'In development (paused)',
      'I can make any videos',
      'crown',
      '',
      2012,
      ['Video Game', 'Unity', 'Animation', '2D', 'RPG', 'Adventure', 'Mystery']
    ),
    _createProj(
      'lucky',
      'Lucky Star Shooter',
      'Project Done',
      'The following is an Electronic Game Project I did for my school. I made this project in two weeks, I worked on it in solo (my grandfather helped me to prepare physically the project).      ',
      'lucky',
      'https://github.com/Darkfall48/Lucky-Star-Shooter',
      2012,
      ['Game', 'Electronics', 'Arduino', 'School Project']
    ),
    _createProj(
      'parking',
      'My Parking',
      'Project Done',
      'I can make any videos',
      'parking',
      'https://devpost.com/software/my-parking',
      2012,
      ['Hackatown', 'PolyHacks', 'Montreal', 'Web', 'Parking']
    ),
    _createProj(
      'unity',
      'My Unity Games Projects',
      'Projects Done',
      'I can make any videos',
      'unity',
      'https://play.unity.com/u/Darkfall48',
      2012,
      ['Video Game', 'Unity', 'Animation', '3D', '2D', 'Data Persistence']
    ),
    _createProj(
      'mines',
      'Mine Sweeper',
      'Project Done',
      'I can make any videos',
      'mines',
      'https://darkfall48.github.io/Sprint-1-Mine-Sweeper/',
      2012,
      ['Coding Academy', 'Javascript', 'CSS', 'HTML']
    ),
    _createProj(
      'games',
      'Game Design',
      'Game Design like a pro',
      'I can make any games',
      'games',
      'Proj Url',
      84841548,
      ['Game Design', 'Unity', 'Game Maker']
    ),
  ]
  console.log('Projects:', gProjs)
}

function _createProj(
  name,
  title,
  intro,
  desc,
  url,
  projUrl,
  timeInStamp,
  labels
) {
  return {
    id: name,
    name,
    title,
    intro,
    desc,
    url,
    projUrl,
    publishedAt: timeInStamp,
    labels,
  }
}
