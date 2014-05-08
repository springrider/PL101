start =
    wordlist
word = 
    [a-z]+
spaceword =
    " " wd:word
    { return wd.join("");}

wordlist =
    first:word extra:spaceword*
    {return [first.join("")].concat(extra);}    
