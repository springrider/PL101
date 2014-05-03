var melody2_mus = 
    { tag: 'seq',
      left: 
       { tag: 'seq',
         left: { tag: 'note', pitch: 'a4', dur: 250 },
         right: { tag: 'note', pitch: 'b4', dur: 250 } },
      right:
       { tag: 'seq',
         left: { tag: 'note', pitch: 'c4', dur: 500 },
         right: { tag: 'note', pitch: 'd4', dur: 500 } } };


var compile = function (musexpr) {
    // your code here
    if (musexpr.tag == 'seq'){
        if(typeof start === "undefined"){
            start = 0;
        }
        var larr,rarr,prevItem,lastItem; // make it local!!!
        larr = compile(musexpr.left);
        rarr = compile(musexpr.right);
        res = larr.concat(rarr); 
        
        return res;
    }
    else{
        musexpr.start = start;
        start += musexpr.dur;
        return [musexpr];
    }
};

//console.log(compile(melody2_mus));

var compile = function (musexpr) {
    var rcompile = function (start,musexpr){
        if (musexpr.tag == 'seq'){
            var l,r;
            l = rcompile(start,musexpr.left);
            lastItem = l[l.length-1];
            start = lastItem.start+lastItem.dur;
            r = rcompile(start,musexpr.right);
            //lastItem = r[r.length-1];
            //start = lastItem.start+lastItem.dur;
            return l.concat(r);
        }
        else if (musexpr.tag == 'note'){
            musexpr.start = start;
            //start += musexpr.dur;
            //console.log("s+:"+start+"a")
            //console.log(musexpr);
            return [musexpr];
        }
    }; //rcompile
    return rcompile(0,musexpr);
}
console.log(compile(melody2_mus));
