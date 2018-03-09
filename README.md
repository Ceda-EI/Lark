# Lark
Firefox addon that fixes input boxes on dark themes.

Lark checks for the background and foreground of each input box and calculates the contrast between them. If the contrast is below a certain value, it changes the background to black or white whichever has more contrast with the foreground than the required threshold. If neither white nor black scores more than the threshold with the foreground color, then both the background and foreground are changed to black and white respectively.
