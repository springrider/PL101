var reverse = function(expr) {
    // Your code here
    
    var ret = expr;
    if(expr.tag == 'seq'){
        ret = {tag:'seq',
               left:reverse(expr.right),
               right:reverse(expr.left)};
        return ret;
    }

    return ret;
    
};
