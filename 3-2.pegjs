start =
    countrycode

countrycode =
    first:[a-z] second:[a-z]
        {return first+second;}
