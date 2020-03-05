// let titles = [];
// titles.forEach(function(title){
// $(".songs").append("<div>")   
// })
let save = []

$(".button").click(function(){
  let artist =  $(".artist").val();
  let song =  $(".song").val();
  let duration =  $(".duration").val();
  let photo = $(".photo").val();
  let link= $(".link").val();

 let obj = {
     artist,
     song,
     duration,
     photo,
     link,
 }
 save.push(obj);

 $(".playlist").empty();
save.forEach(function(info){
    $(".playlist").append("<p>Artist: "+ info.artist +"</p>")
    $(".playlist").append("<p>Song: "+ info.song +"</p>")
    $(".playlist").append("<p>"+ info.duration +"</p>")
    $(".playlist").append("<p>"+ info.photo +"</p>")
    $(".playlist").append("<p>"+ info.link +"</p>")
});
    //$(".playlist").text(artist+song)
});
