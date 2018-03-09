function RGBToRelLum(r,g,b) {
   r = r / 255
   g = g / 255
   b = b / 255
   if (r <= 0.03928){
       r = r / 12.92
   }
   else {
       r = ((r + 0.055) / 1.055) ** 2.4
   }
   if (r <= 0.03928){
       r = r / 12.92
   }
   else {
       r = ((r + 0.055) / 1.055) ** 2.4
   }
   if (r <= 0.03928){
       r = r / 12.92
   }
   else {
       r = ((r + 0.055) / 1.055) ** 2.4
   }
   var lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
   return lum
}


function contrastRatio(l1, l2) {
    if (l1 > l2) {
        return (l1 + 0.05) / (l2 + 0.05)
    }
    else {
        return (l2 + 0.05) / (l1 + 0.05)
    }
}


function rgb(r, g, b) {
    return [r, g, b]
}

function rgba(r, g, b, a) {
    return [r, g, b]
}

const blackLum = 0
const black = '#000000';
const whiteLum = 1
const white = '#FFFFFF';
var elements = document.querySelectorAll('input[type="password"], input[type="text"], input[type="email"], input[type="number"], input:not([type]), textarea')
for (i = 0; i < elements.length ; i++) {
   var bg = getComputedStyle(elements[i]).backgroundColor
   var fg = getComputedStyle(elements[i]).color
   var bgRGB = eval(bg)
   var fgRGB = eval(fg)
   var bgLum = RGBToRelLum(bgRGB[0], bgRGB[1], bgRGB[2])
   var fgLum = RGBToRelLum(fgRGB[0], fgRGB[1], fgRGB[2])
   var contrast = contrastRatio(bgLum, fgLum)
   if (contrast < 4.5) {
       var blackContrast = contrastRatio(fgLum, blackLum)
       var whiteContrast = contrastRatio(fgLum, whiteLum)
       if (blackContrast > whiteContrast) {
           if (blackContrast >= 4.5) {
               elements[i].style.backgroundColor = black;
           }
           else {
               elements[i].style.backgroundColor = black;
               elements[i].style.color = white;
           }
       }
       else {
           if (whiteContrast >= 4.5) {
               elements[i].style.backgroundColor = white;
           }
           else {
               elements[i].style.backgroundColor = black;
               elements[i].style.color = white;
           }
       }
   }
}
