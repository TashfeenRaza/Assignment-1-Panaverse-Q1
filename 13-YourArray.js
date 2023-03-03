var favArray = ["motorcycle", "car", "bicycle", "airplane"];
/* The Bellow code is using the map function to iterate through the favArray and return a new array with
the values of the favArray added with the strings in the switch statement. */
var result = favArray.map(function (item) {
    switch (item) {
        case "motorcycle":
            return "I go to University on a motocycle";
            break;
        case "car":
            return "My dream is to buy a new Honda City Car ";
            break;
        case "bicycle":
            return "I left my bicycle out in the rain";
            break;
        case "airplane":
            return "The airplane took off ten minutes ago";
            break;
        default:
    }
});
/* The join() method creates and returns a new string by concatenating all of the elements in an array
, separated by commas or a specified separator string. If the array has
only one item, then that item will be returned without using the separator. */
var finalStrings = result.join(".\n");
console.log(finalStrings);
