// a simple function to add something
function addTo80(n) {
    return n + 80;
    }
     
    //create an empty object
    let cache={};
     
    // a memoized function to add
     
    function memoizedAddTo80(n) {
      if (n in cache) {
        console.log('Cached Time');  
        return cache[n];
     } else {
        console.log('Calculated time');
        cache[n]=5+80;
        return cache[n]
      }
    }
     
    // returned function from memoizedAdd
    console.log('1', memoizedAddTo80(5));// calculated
    console.log('2', memoizedAddTo80(5));// cached