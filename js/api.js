
$(document).ready(function(){

  $.ajax({
    url: "https://api.github.com/users/marcode777/repos",
    type: "GET",
    success: function(repos){
      for (var i = 0; i<repos.length; i++){
        var listItem = $('<li>');
        console.log(repos[i].name);
      $('.info').append(listItem.html(repos[i].name));
      }
    }
  });
});

//   // for (var i = 1; i<101; i++){
//   //   if( i % 3=== 0 && i % 5 === 0){
//   //     console.log("fizzbuzz");
//   //   } else if( i % 3=== 0){
//   //     console.log("fizz");
//   //   } else if ( i % 5 === 0){
//   //     console.log("buzz");
//   //   } else {
//   //     console.log(i);
//   //   }
//   // }
// });
