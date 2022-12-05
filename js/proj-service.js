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
      2012,
      ['Media', 'YouTube', 'FX', 'Adobe Premiere Pro', 'Camtasia']
    ),
    _createProj(
      'games',
      'Game Design',
      'Game Design like a pro',
      'I can make any games',
      'games',
      84841548,
      ['Game Design', 'Unity', 'Game Maker']
    ),
  ]
  console.log(gProjs)
}

function _createProj(name, title, intro, desc, url, timeInStamp, labels) {
  return {
    id: name,
    name,
    title,
    intro,
    desc,
    url,
    publishedAt: timeInStamp,
    labels,
  }
}
