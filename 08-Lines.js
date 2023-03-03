var num = 8;
for (var i = 0; i < 4; i++) {
    var line = "";
    for (var j = 0; j < 8; j++) {
        line += num.toString() + " ";
    }
    console.log(line.trim());
}
