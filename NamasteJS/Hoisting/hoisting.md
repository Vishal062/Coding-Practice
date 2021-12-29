# Hoisting :

- JavaScript only hoists declarations, not initialization
  
  blogName("Hoisting"); <br>

    var blogName = function(name) { <br>
        console.log("Title of the blog is " + Hoisting);<br>
    }<br>

- The result of the code will be Uncaught TypeError: blogName is not a function


- [moreDetails](https://blog.bitsrc.io/what-is-javascript-hoisting-f0678208eb08)