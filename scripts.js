// Each Button is coded below:
var service_introduced_year
$('button').on('click', function () {
  var classList = $(this).attr("class");
  console.log(classList)

  // Red:
  if (classList === 'red-button') {
    service_introduced_year = "1976"
    number_of_stations = "27"
    distance_in_miles = "32"
    line_termini = "Shady Grove to Glenmont"


    $('body').css('background-color', 'crimson')
    $('.right-column').css('color', 'white')
    $('.service_introduced').text(service_introduced_year)
    $('.number_of_stations').text(number_of_stations)
    $('.distance_in_miles').text(distance_in_miles)
    $('.line_termini').text(line_termini)
  }
  // Orange:
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
  // Blue:
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

  // Green:
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
  // Yellow:
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
  // Silver:
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
