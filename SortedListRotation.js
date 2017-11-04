var findRotationPoint = function (sortedList) {
    var smallestValue = sortedList[0];
    var smallestValueIndex = 0;

    /**
     * Find smallest value
     */
    for(var i = 1; i < sortedList.length; i++) {
        if(sortedList[i] < smallestValue) {
            smallestValue = sortedList[i];
            smallestValueIndex = i;
        }
    }

    /**
     * Find the total number of elements from smallest value till the last value
     */
    var numElementsRotated = sortedList.length - smallestValueIndex;

    console.log('The rotated sortedList is: ' + sortedList);
    console.log('The sorted list is translated ' + numElementsRotated + ' places to the left with rotation');
};

findRotationPoint([2,3,4,5,0,1]);