window.onload = function() {
  var input = document.querySelectorAll(".js-typeahead")[0].focus();
}

$(document).ready(function(){

  var roomsList = new Bloodhound({
    name: 'sf-rooms',
    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.name); },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    limit: 3,
    local: [
      {
        "name": "Turbo",
        "landmarks": ["Between The Mint and Tupac", " opposite Lobby 6 elevators", " Reception side"],
        "size": "12 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Titan",
        "landmarks": ["Between The Mint and Tupac", " opposite Lobby 6 elevators", " Café side"],
        "size": "12 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Sonic",
        "landmarks": ["Opposite the gym", " between The Mint and the Café", " Reception side"],
        "size": "12 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Nitro",
        "landmarks": ["Opposite the gym", " between The Mint and the Café", " Café side"],
        "size": "12 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Chaos",
        "landmarks": ["Between the Café and Biggie", " opposite Lobby 2 elevators", " Café side"],
        "size": "12 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Doorman Drew",
        "landmarks": ["By the Reception", " towards Biggie", " Reception side"],
        "size": "12 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Supply Depot",
        "landmarks": ["By the Mint", " Reception side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Sixpool",
        "landmarks": ["By the Mint", " Reception side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Santa Barbara Honda",
        "landmarks": ["By the Mint", " Reception side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Rainbow Shell",
        "landmarks": ["By the Mint", " Café side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Psychobox",
        "landmarks": ["By the Mint", " Café side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Powerthrough",
        "landmarks": ["By the Mint", " Café side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Sync",
        "landmarks": ["Opposite the Mint"],
        "size": "Interviews only",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Check",
        "landmarks": ["Opposite the Mint"],
        "size": "Interviews only",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Heart",
        "landmarks": ["Opposite the Mint"],
        "size": "Interviews only",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Shalimar",
        "landmarks": ["In Tupac", " behind the snacks"],
        "size": "4 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Jenny (8675309)",
        "landmarks": ["In Tupac", " between the snacks and the elevators"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Dropbox blue (1f75CC)",
        "landmarks": ["In Tupac", " between the snacks and the elevators"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Tulan",
        "landmarks": ["In Tupac", " between the snacks and the elevators"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "HALP",
        "landmarks": ["Between the Reception and Biggie", " Reception side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Fortress of Solitude",
        "landmarks": ["Between the Reception and Biggie", " Reception side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "First World Problem",
        "landmarks": ["Between the Reception and Biggie", " Reception side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Muracci’s",
        "landmarks": ["Between the Reception and Biggie", " opposite the Lobby 2 elevators", " Reception side"],
        "size": "4 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Katana-ya",
        "landmarks": ["Between the Reception and Biggie", " opposite the Lobby 2 elevators", " Reception side"],
        "size": "4 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Carousel",
        "landmarks": ["In Biggie", " Reception side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Bikeshed",
        "landmarks": ["In Biggie", " Reception side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Arrears",
        "landmarks": ["In Biggie", " Reception side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Back to The Future",
        "landmarks": ["In Biggie", " behind the snacks"],
        "size": "10 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "The Future is Now",
        "landmarks": ["In Biggie", " behind the snacks"],
        "size": "10 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "All Seasons",
        "landmarks": ["In Biggie", " between the snacks and the elevators"],
        "size": "4 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Challenge Accepted",
        "landmarks": ["Between the Café and Biggie", " Café side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Champageday",
        "landmarks": ["Between the Café and Biggie", " Reception side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Ferdonic Plague",
        "landmarks": ["By the Café", " towards Biggie", " Café side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Crystal Towers",
        "landmarks": ["By the Café", " towards Biggie", " Café side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Coin Battle",
        "landmarks": ["By the Café", " towards Biggie", " Café side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "It is What It is",
        "landmarks": ["By the Café", " towards Tupac", " Café side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Masamune",
        "landmarks": ["By the Café", " towards Tupac", " Café side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Meteor Crater",
        "landmarks": ["By the Café", " towards Tupac", " Café side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Ohshoot",
        "landmarks": ["By the Reception", " Café side"],
        "size": "2 People",
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Tupac",
        "landmarks": ["West side", " overlooking Fourth St"],
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      {
        "name": "Biggie",
        "landmarks": ["East side", " overlooking Third St", " opposite AT&T Park"],
        "floor": "Berry St. building, 4th floor",
        "key": "b4",
      },

      //
      // Berry St 5th Floor
      //

      {
        "name": "Emoji",
        "landmarks": ["Left of the Reception", " around the corner"],
        "size": "1 Person",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "Evenflow",
        "landmarks": ["Left of the Reception", " around the corner"],
        "size": "1 Person",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "153 Kearny",
        "landmarks": ["Left of the Reception"],
        "size": "2 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "760 Market",
        "landmarks": ["Left of the Reception"],
        "size": "2 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "Armeetingeddon",
        "landmarks": ["Left of the Reception"],
        "size": "2 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "Athena",
        "landmarks": ["Left of the Reception"],
        "size": "4 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "Dropbox (Dropbox)",
        "landmarks": ["Left of the Reception"],
        "size": "8 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "Dropbox (Personal)",
        "landmarks": ["Left of the Reception"],
        "size": "8 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "global_model.py",
        "landmarks": ["Right of the Reception", " Café side"],
        "size": "3 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "Haiku",
        "landmarks": ["Right of the Reception", " Café side"],
        "size": "3 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "Keep Austin Weird",
        "landmarks": ["Right of the Reception", " Café side"],
        "size": "4 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "Makini Train",
        "landmarks": ["Right of the Reception", " Café side", " around the corner"],
        "size": "7 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "Mandatory Team Meeting",
        "landmarks": ["Right of the Reception", " Café side", " around the corner"],
        "size": "7 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "Shamdrop",
        "landmarks": ["Right of the Reception", " Café side", " around the corner"],
        "size": "10 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "Shmodel",
        "landmarks": ["Right of the Reception", " Café side", " around the corner"],
        "size": "4 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "Watermelon Alert",
        "landmarks": ["Right of the Reception", " Café side", " around the corner"],
        "size": "5 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      {
        "name": "With a Pulse",
        "landmarks": ["Right of the Reception", " Café side", " around the corner"],
        "size": "5 People",
        "floor": "Berry St. building, 5th floor",
        "key": "b5",
      },

      //
      // Wharf 6th Floor
      //

      {
        "name": "Auth.net",
        "landmarks": ["Right of the Reception"],
        "size": "2 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },

      {
        "name": "Battlecode",
        "landmarks": ["Right of the Reception"],
        "size": "2 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },

      {
        "name": "Bluesky",
        "landmarks": ["Right of the Reception"],
        "size": "5 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },

      {
        "name": "Few Nags",
        "landmarks": ["Right of the Reception"],
        "size": "2 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },

      {
        "name": "Ejstorr",
        "landmarks": ["Right of the Reception"],
        "size": "2 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },

      {
        "name": "Breakfast Taco",
        "landmarks": ["Right of the Reception"],
        "size": "2 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },

      {
        "name": "Final Destination",
        "landmarks": ["Right of the Reception"],
        "size": "8 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },

      {
        "name": "Fireshare",
        "landmarks": ["Right of the Reception"],
        "size": "8 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },

      {
        "name": "Kava",
        "landmarks": ["Right of the Reception"],
        "size": "10 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },

      {
        "name": "I Sync NYC",
        "landmarks": ["Right of the Reception"],
        "size": "10 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },

      {
        "name": "Vegemite",
        "landmarks": ["Left of the Reception"],
        "size": "5 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },

      {
        "name": "Too Soon?",
        "landmarks": ["Left of the Reception"],
        "size": "12 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },

      {
        "name": "SJC",
        "landmarks": ["Left of the Reception"],
        "size": "5 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },

      {
        "name": "Owen Not On The Wall!",
        "landmarks": ["Left of the Reception"],
        "size": "5 People",
        "floor": "Wharf building, 6th floor",
        "key": "w6",
      },
    ]
  });

  var promise = roomsList.initialize();

  promise
  .done(function() { console.log('success!'); })
  .fail(function() { console.log('err!'); });

  $('.js-typeahead').typeahead({
    highlight: true
  }, {
    name: 'sf-rooms',
    displayKey: 'name',
    source: roomsList.ttAdapter(),
    templates: {
      suggestion: Handlebars.compile('<h3>{{name}} <small class="floor floor--{{key}}" title="{{floor}}">{{key}}</small></h3>
      <p>{{landmarks}}</p>
      <p><small class="meta">{{size}}</small></p>'),
      empty: '<h3 class="promo">No rooms found</h3><p class="promo">Bummer.</p>'
    }
  });

});
