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
   //$(".playlist").append('<div class="record">'+"</div>"); 
    $(".playlist").append('<p class="songInfo">Artist: '+ info.artist +"</p>")
    $(".playlist").append('<p class ="songInfo">Song: '+ info.song +"</p>")
    $(".playlist").append('<p class="songInfo">Duration: '+ info.duration +"</p>")
    $(".playlist").append(`<p class="songInfo">AlbumCover:<img src="${info.photo}"> </p>`)
    $(".playlist").append(`<p class="songInfo">SongLink:<a href="${info.link}">link</a></p>`)
});
    //$(".playlist").text(artist+song)
});
