

var $down = $(".icondown");
var $up = $(".iconup");

$down.on("click", function() {
  $(".iconup").velocity("scroll", { 
    
    duration: 800,
    delay: 500
  });
});

$up.on("click", function() {
  $("demo-content").velocity("scroll", { 
    duration: 800,
    delay: 500
  });
});