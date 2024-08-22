
function MovieCard({title,genre,rated,poster,year,language,type}) {
    
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-72 m-4">
        <img src={poster} alt={title}
         className="w-full h-90 object-cover" />
        <div className="p-4">
          <h3 className="text-yellow-500 font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{type.toUpperCase()}</p>
          <p className="text-gray-400 text-sm mt-1">{year}</p>
          <p className="text-gray-400 text-sm mt-1">Language: {language}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-200 text-sm">Rating: {rated}</span>
            <span className="text-gray-200 text-sm"> {genre}</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default MovieCard;
  