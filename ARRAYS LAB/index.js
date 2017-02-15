Array.prototype.toTwenty = function() {
    var twenty = [];
    for(i = 1; i<=20; i++){
    	twenty.push(i);
    }
    return twenty;
};

Array.prototype.toForty = function() {
    var forty = [];
    for(i = 2; i<=40; i += 2){
    	forty.push(i);
    }
    return forty;
};

Array.prototype.toOneThousand = function() {
    var thousand = [];
    for(i = 10; i<=1000; i += 10){
    	thousand.push(i);
    }
    return thousand;
};





// module.exports = {
// 	toTwenty: toTwenty,
// 	toForty: toForty,
// 	toOneThousand: toOneThousand
// }