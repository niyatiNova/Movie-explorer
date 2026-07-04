function TrailerModal({ trailerKey, onClose }) {
  if (!trailerKey) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-5xl rounded-2xl bg-black shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl transition-all duration-300"
        >
          ✕
        </button>

        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default TrailerModal;