var melody_mus = 
    { tag: 'seq',
      left: 
       { tag: 'par',
         left: { tag: 'note', pitch: 'c3', dur: 250 },
         right: { tag: 'note', pitch: 'g4', dur: 500 } },
      right:
       { 
        tag: 'repeat',
        section: { tag: 'par',
         left: { tag: 'note', pitch: 'd3', dur: 500 },
         right: { tag: 'note', pitch: 'f4', dur: 250 } },count:3 } };
var melody_note = [
    { tag: 'note', pitch: 'c3', start: 0, dur: 250 },
    { tag: 'note', pitch: 'g4', start: 0, dur: 500 },
    { tag: 'note', pitch: 'd3', start: 500, dur: 500 },
    { tag: 'note', pitch: 'f4', start: 500, dur: 250 } ];


var compile = function(musexpr)
{
    var rcompile = function(start, musexpr,ispar){
        var tag = musexpr.tag;
        if(tag == 'seq' || tag == 'par' || tag == 'repeat')
        {
            ispar = false;
            if(tag == 'par')
            {
                ispar = true;
            }
            var count = 1;
            if(tag == 'repeat'){
                count = musexpr.count;
                var rmus = []; //recursive mus 
                for(var i=0; i<count; i++){
                    rmus = rmus.concat(rcompile(start, musexpr.section,ispar));
                    //console.log(rmus);
                }
                
                return rmus;
            }
            else
            {
                var l = rcompile(start,musexpr.left,ispar); 
                if(ispar===false)
                {
                    var lastnode = l[l.length-1];
                    start = lastnode.start+lastnode.dur;
                }
                var r = rcompile(start,musexpr.right,ispar); 
                return l.concat(r)
            }
        }
        else if(tag == 'note')
        {
            musexpr.start = start;
            return [musexpr];
        }
    };
    return rcompile(0,musexpr);
};

console.log(compile(melody_mus));
