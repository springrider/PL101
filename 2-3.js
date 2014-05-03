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


var endTime = function (time, expr) {
    // your code here
    endt = time;
    //console.log(expr);
    //console.log(typeof(expr));
    //return 0
    if (expr.tag == 'seq'){
        
        endt = endTime(endt,expr.left);
        endt = endTime(endt,expr.right);
    }
    else if(expr.tag == 'note'){
        console.log("before endt:"+endt);
        console.log("add:"+expr.dur);
        endt += expr.dur;
        console.log("end endt:"+endt);
         
    }
      return endt;
};

console.log(endTime(0,melody2_mus));
