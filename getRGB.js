function getRGB(rgbvalue){
    var result="";
    var red = rgbvalue[1].concat(rgbvalue[2])
    var green = rgbvalue[3].concat(rgbvalue[4])
    var blue = rgbvalue[5].concat(rgbvalue[6])
    return result = "rgb(" + parseInt(red, 16) +","+ parseInt(green, 16)+ ","+ parseInt(blue, 16) +")" ;
    
}

getRGB("#00FF00");
