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
      'Video',
      'Video Editing',
      'Video Editing like a pro',
      'I can make any videos',
      'video',
      'https://darkfall48.github.io/Sprint-1-Mine-Sweeper/',
      2012,
      ['Media', 'YouTube', 'FX', 'Adobe Premiere Pro', 'Camtasia']
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
  console.log(gProjs)
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
