start =
    word
lchar = 
    [a-z]
uchar = 
    [A-Z]
word =
    lower
   / upper

lower = 
    strs:lchar+
         {return strs.join("");}
        
upper = 
    strs:uchar+
         {return strs.join("");}
