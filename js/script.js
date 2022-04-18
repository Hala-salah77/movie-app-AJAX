

var posts = [];
var pageNumber ;

var myRequest = new XMLHttpRequest();

myRequest.open("GET" , "https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50");

myRequest.send();


myRequest.addEventListener("readystatechange" , function(){


  if(myRequest.readyState == 4 && myRequest.status == 200)
  {
    pageNumber =  JSON.parse(  myRequest.response).page;
    posts =  JSON.parse(  myRequest.response).results;
    console.log(posts);
    displayPosts()
  }
  
});


function displayPosts()
{
  var cartoona = ``;

  for(var i=0;i<posts.length;i++)
  {

    cartoona +=`
        <div class="col-md-3">
        <div class="post position-absoulute mb-5">
              <h5 class="rate">${posts[i].vote_average}</h5>
              <div class="img-box">
                  <img class="w-100" src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}">
              </div>
                <h4 class="title my-3">${posts[i].title}</h4>
                <!-- <p>${posts[i].overview}</p> -->

          </div>
        </div>`

  }

  document.getElementById("myRow").innerHTML  = cartoona;
}


