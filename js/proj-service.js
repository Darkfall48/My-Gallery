'use strict'

var gProjs

function init() {
  _createProjs()
}

function getProjs() {
  return gProjs
}

function getDate(timeInStamp) {
  var a = new Date(+timeInStamp * 1000)
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  var year = a.getFullYear()
  var month = months[a.getMonth()]
  var date = a.getDate()
  //   var hour = a.getHours()
  //   var min = a.getMinutes()
  //   var sec = a.getSeconds()
  var time = date + ' ' + month + ' ' + year
  return time
}

function _createProjs() {
  gProjs = [
    _createProj(
      'mines',
      'Mine Sweeper',
      'Project Done',
      'This was the first exam and big project I did during my Full Stack Developer training at Coding Academy.',
      'mines',
      'https://darkfall48.github.io/Sprint-1-Mine-Sweeper/',
      1670286208,
      ['Coding Academy', 'Javascript', 'CSS', 'HTML']
    ),
    _createProj(
      'littleCrown',
      'The Little Crown',
      'In development (paused)',
      'The little crown is a game project I started a few months before finishing my military service.</br>The game has an unconventional graphic and gameplay style, it relies on the already acquired bases of the known Nintendo licenses but with a very personal addition.</br></br>The project is currently on break, it is about 50% of its final version.',
      'crown',
      '',
      1581639531,
      ['Video Game', 'Unity', 'Animation', '2D', 'RPG', 'Adventure', 'Mystery']
    ),
    _createProj(
      'unity',
      'My Unity Games Projects',
      'Projects Done',
      'Here is the list of games I was able to implement during my Junior Code Developer training in Unity Learn.',
      'unity',
      'https://play.unity.com/u/Darkfall48',
      1665793131,
      ['Video Game', 'Unity', 'Animation', '3D', '2D', 'Data Persistence']
    ),
    _createProj(
      'parking',
      'My Parking',
      'Project Done',
      `<h3>Inspiration ✨</h3></br>
      We all know it can be complicated stressful to find parking in the city of Montreal. Montreal's paid parking spots are useful and practical, but it is not possible to know in advance where they are, and if they are available. We wanted to create a solution for this problem to relieve the stress of finding parking in Montreal.</br></br>
      
      </br><h3>What it does 🚗</h3></br>
      With our application, you will be able to find the parking spaces closest to the location of your choice. You can either drag the geolocation marker on the map or manually search a location using the search bar. You can also adjust the quantity of results you want to display. Finally, you can also hover your mouse on the parking results to show the parking number.</br></br>
      
      </br><h3>How we built it 🛠</h3></br>
      We used HTML5 and CSS3 to build the website and to make the design. We used the language Typescript to create the application which does the job of displaying the map and interacting with it. It also use the parking station data of the city of Montreal and use this data with the API of Google Map to display the parking spots on the map.</br></br>
      
      </br><h3>Challenges we ran into 🏋</h3></br>
      Using the collected data from the municipality website and using it with the Google Map API was a real challenge, it was something we had never done before. We also did not have a lot of experience in programming with Angular, so we worked with many technologies that were new to us.</br></br>
      
      </br><h3>Accomplishments that we're proud of 🥇</h3></br>
      We are proud to have succeeded in making a functional application using technologies that were new to us in such a short time. Obviously, we would have liked to add more features, but the core of the application works.</br></br>
      
      </br><h3>What we learned 📚</h3></br>
      We learned that collaboration and communication are extremely important in this kind of project, especially with such limited time. We also discovered how to use powerful APIs in an Angular project such as the Maps JavaScript API.'`,
      'parking',
      'https://devpost.com/software/my-parking',
      1644711531,
      ['Hackatown', 'PolyHacks', 'Montreal', 'Web', 'Parking']
    ),
    _createProj(
      'lucky',
      'Lucky Star Shooter',
      'Project Done',
      `The following is an Electronic Game Project I did for my school. I made this project in two weeks, I worked on it in solo (my grandfather helped me to prepare physically the project).
      
      </br></br><h3>Goal of the game 👾</h3></br>
      The game is presented as a shooter.
      
      When the game starts, 4 targets will rise one after the other during a given time.
      
      You will have to use the laser gun provided especially for the occasion to hit the targets within the time limit. You will have to aim at the center of the targets since there is a sensor which is located there.
      
      The player's score is displayed in real-time on the LCD screen.
      
      I was originally planning to add sound for the game, but unfortunately, I couldn't get it to work in the time I had left to prepare this project.
      
      </br></br></br><h3>Special Awards 🥇</h3></br>
      My project was selected by my school to participate in an international competition at the Tel-Aviv University.`,
      'lucky',
      'https://github.com/Darkfall48/Lucky-Star-Shooter',
      1520554731,
      ['Game', 'Electronics', 'Arduino', 'School Project']
    ),
    _createProj(
      'youtube',
      'My YouTube Channel',
      'Will always be in development:)',
      `This is the most ambitious project I had as a child.

      </br></br>I have been running this channel since 2013.
      
      </br></br>I started this channel by doing what I love the most, gaming. I was doing Lets Play and I was invited to test games before their release.
      
      </br></br>Afterwards, I began to make more professional videos on the channel.
      
      </br></br>Today the channel is in hiatus (the recent videos are in private). But, creating videos is still my passion and I plan to continue it one day.`,
      'youtube',
      'https://www.youtube.com/@Darkfall48',
      1360109931,
      ['YouTube', 'Video Making', 'Personal Videos', 'FX']
    ),
  ]
  //   console.log('Projects:', gProjs)
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
