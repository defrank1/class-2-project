// This tells the page which information to display when you click on a button
var service_introduced_year
$('button').on('click', function () {
  var classList = $(this).attr("class");
  console.log(classList)

  // These are the details for the Red button:
  if (classList === 'red-button') {
    service_introduced_year = "1976"   // Year service was introduced on this line
    number_of_stations = "27" // the number of stations the line serves
    distance_in_miles = "32" // the distance to the nearest mile of the line track
    line_termini = "Shady Grove to Glenmont" // the two terminal stations on the line


    $('body').css('background-color', 'crimson') // background color after you click
    $('.right-column').css('color', 'white') // text color after you click
    $('.service_introduced').text(service_introduced_year)
    $('.number_of_stations').text(number_of_stations)
    $('.distance_in_miles').text(distance_in_miles)
    $('.line_termini').text(line_termini)
  }
  // These are the details for the Orange button:
  if (classList === 'orange-button') {
    service_introduced_year = "1978"
    number_of_stations = "26"
    distance_in_miles = "26"
    line_termini = "Vienna to New Carrollton"


    $('body').css('background-color', 'darkorange')
    $('.right-column').css('color', 'black')
    $('.service_introduced').text(service_introduced_year)
    $('.number_of_stations').text(number_of_stations)
    $('.distance_in_miles').text(distance_in_miles)
    $('.line_termini').text(line_termini)
  }
  // These are the details for the Blue button:
  if (classList === 'blue-button') {
    service_introduced_year = "1977"
    number_of_stations = "28"
    distance_in_miles = "30"
    line_termini = "Franconia-Springfield to Largo"


    $('body').css('background-color', 'dodgerblue')
    $('.right-column').css('color', 'white')
    $('.service_introduced').text(service_introduced_year)
    $('.number_of_stations').text(number_of_stations)
    $('.distance_in_miles').text(distance_in_miles)
    $('.line_termini').text(line_termini)
  }

  // These are the details for the Green button:
  if (classList === 'green-button') {
    service_introduced_year = "1991"
    number_of_stations = "21"
    distance_in_miles = "23"
    line_termini = "Branch Avenue to Greenbelt"


    $('body').css('background-color', 'mediumseagreen')
    $('.right-column').css('color', 'white')
    $('.service_introduced').text(service_introduced_year)
    $('.number_of_stations').text(number_of_stations)
    $('.distance_in_miles').text(distance_in_miles)
    $('.line_termini').text(line_termini)
  }
  // These are the details for the Yellow button:
  if (classList === 'yellow-button') {
    service_introduced_year = "1983"
    number_of_stations = "13"
    distance_in_miles = "11"
    line_termini = "Huntington to Mount Vernon Square"


    $('body').css('background-color', 'gold')
    $('.right-column').css('color', 'black')
    $('.service_introduced').text(service_introduced_year)
    $('.number_of_stations').text(number_of_stations)
    $('.distance_in_miles').text(distance_in_miles)
    $('.line_termini').text(line_termini)
  }
  // These are the details for the Silver button:
  if (classList === 'silver-button') {
    service_introduced_year = "2014"
    number_of_stations = "34"
    distance_in_miles = "41"
    line_termini = "Ashburn to Largo"


    $('body').css('background-color', 'lightslategrey')
    $('.right-column').css('color', 'black')
    $('.service_introduced').text(service_introduced_year)
    $('.number_of_stations').text(number_of_stations)
    $('.distance_in_miles').text(distance_in_miles)
    $('.line_termini').text(line_termini)
  }



})