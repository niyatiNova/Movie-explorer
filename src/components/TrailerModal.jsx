function TrailerModal({trailerKey,onClose}){
      if(!trailerKey) return null;
    return(
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
       <div className="relative w-[70%] bg-black rounded-xl p-4">
<button
  onClick={onClose}
  className="absolute top-3 right-3 z-[9999]
             bg-red-600 hover:bg-red-700
             text-white w-10 h-10 rounded-full"
>
  ✕
</button>

  <iframe
     className="w-full aspect-video"
    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
    allow="autoplay; encrypted-media"
    allowFullScreen
    title="Trailer"
  />

</div>
      </div>
    )
}

export default TrailerModal;