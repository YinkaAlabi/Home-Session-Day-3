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

Array.prototype.search = function(num){
    var result = {};
    var low = 0;
    var high = this.length-1;
    var mid;
    var count = 0;
    var found = false;

   
    while (low <= high){
        mid = (low + high)/2 | 0;

         if (num == this[high]){
            found = true;
            mid = high;
            break;
        }
        else if (num == this[low]){
            found = true;
            mid = low;
            break;
        }

        else if (num == this[mid]){
            found = true;
            break;
        }

        if(Math.abs(num - this[mid]) > Math.abs(num - this[high])  ){
            low = mid;
            mid = (low + high)/2 | 0;
        }

        else if(Math.abs(num - this[mid]) < Math.abs(num - this[high]) && Math.abs(num - this[mid]) <= Math.abs(num - this[low])){
            if(Math.abs(num - this[high]) < Math.abs(num - this[low])){
                low = mid;
                mid = (low + high)/2 | 0;
            }
            else{
                high = mid;
                mid = (low + high)/2 | 0;
            }
        }
        else if(Math.abs(num - this[mid]) < Math.abs(num - this[high]) && Math.abs(num - this[mid]) > Math.abs(num - this[low])) {
            high = mid;
            mid = (low + high)/2 | 0;
        }



        if (this[mid] < num){
            low = mid + 1;
        }
        else if (this[mid] > num){
            high = mid - 1;
        }
        else{
            found = true;
            break;
        }

        count += 1;
    }
   

    if (found == false){
        mid = -1;
    }

    result['count'] = count;
    result['index']=  mid;
    result['length']= this.length;
    return result;
}



