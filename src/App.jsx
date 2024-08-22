import { useState } from "react";
import Moviecard from "./components/Moviecard";
import './App.css'

function App() {
const [movie, setmovie] = useState('')
const [moviedata, setmoviedata] = useState([])

async function search(name){
  try{
    const response=await fetch(`http://www.omdbapi.com/?apikey=30ce13ca&t=${name}`)
    const data =await response.json();
    console.log(data)
    if(data.Title){
      const moviearry=[{
        title:data.Title,
        language:data.Language,
        poster:data.Poster,
        rated:data.imdbRating,
        imb:data.imdbRating,
        type:data.Type,
        year:data.Released,
        id: data.imdbID,
        genre:data.Genre
     
      }]
      
      setmoviedata(moviearry)
    }
  
    else{
          alert("Enter Vaild Input")
      }
      
  }catch(err){
    console.log("Error" ,err)
  }
}
//................................
async function movie_genre(name){
   try{
    const response_gen=await fetch(`https://yts.mx/api/v2/list_movies.json?genre=${name}`)
    const data_gen =await response_gen.json();
    const movies=data_gen.data.movies;
    console.log(movies)
    if(movies.length>0){
      const genarry=movies.map((data)=>({
        title:data.title,
        language:data.language,
        poster:data.large_cover_image,
        rated:data.rating,
        type:"MOVIE",
        year:data.year,
        id: data.id,
        genre:data.genres.slice(0,3).join(',')

      }))
      setmoviedata(genarry);
    }
  
      
  }catch(err){
    console.log("Error")
  }
}


  return (
    <>
      <div className="bg-gray-800 flex items-center h-14 justify-between px-4 shadow-md">
        <h3 className="font-bold text-3xl text-yellow-500">Cinema Scout</h3>
        <div className="space-x-2">
          <button className="bg-yellow-500 text-gray-800 w-20 h-8 rounded-lg font-semibold shadow-md hover:bg-yellow-600"
          onClick={()=>{movie_genre('action')}}>
            Action
          </button>
          <button className="bg-yellow-500 text-gray-800 w-20 h-8 rounded-lg font-semibold shadow-md hover:bg-yellow-600"
           onClick={()=>{movie_genre('animation')}}>
            Animated
          </button>
          <button className="bg-yellow-500 text-gray-800 w-20 h-8 rounded-lg font-semibold shadow-md hover:bg-yellow-600"
           onClick={()=>{movie_genre('comedy')}}>
            Comedy
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <div className="bg-gray-700 w-96 h-14 flex justify-center items-center rounded-lg shadow-lg">
          <input
            type="text"
            className="w-56 h-10 rounded-xl p-3 bg-gray-900 text-white placeholder-gray-500 focus:outline-none"
            placeholder="Search movies..."
            onChange={(e)=>{setmovie(e.target.value)}}
          />
          <button className="ml-2 bg-yellow-500 w-20 h-10 font-semibold rounded-lg text-gray-800 shadow-md hover:bg-yellow-600"
          onClick={()=>{search(movie)}}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-6">
        {moviedata.map((data) => (
          <div key={data.id} className="m-4">
            <Moviecard
              title={data.title}
              genre={data.genre}
              rated={data.rated}
              poster={data.poster}
              type={data.type}
              year={data.year}
              language={data.language}
            />
          </div>
        ))}
      </div>


      
    </>
  );
}

export default App;
