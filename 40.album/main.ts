//define the make Album function
function make_album (artist_name: string, album_title :string, tracks? : number){
    let album : {artist: string, title: string , tracks?: number} = {
        artist : artist_name,
        title: album_title,
    
    }


if (tracks !== undefined){
    album.tracks = tracks ;
}

  return album ;
}

//calling three functions with different values
 let Album1= make_album("Laiba", "Album title 1");

 let Album2= make_album("Noman", "Album title 2");
//calling a make_album  function with third parameter
 let Album3= make_album("yashal", "Album title 3", 10);

//printing variables
console.log(Album1);
console.log(Album2);
console.log(Album3);