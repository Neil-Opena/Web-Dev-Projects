
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ", " + city;
    var url = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address;
    $greeting.text("So, you wnat to live at " + address + "?");
    $body.append('<img class="bgimg" src="' + url +'">');
    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
