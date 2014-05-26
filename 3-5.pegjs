start =
    expr

validchar
    = [0-9a-zA-Z_?!+\-=@#$%^&*/.]

atom =
    chars:validchar+
        { return chars.join(""); }

element =
    at:atom " "
    {return at;}
    / "(" ele:element+ at:atom ")" " "
        {return ele.concat(at);}
    / "(" ele:element+ at:atom ")"
        {return ele.concat(at);}

expr =
"(" ele:element+ at:atom ")"
    {return ele.concat(at);}
    / "(" ele:element+ ")"
    {return ele;}
    / at:atom
     {return at;}
