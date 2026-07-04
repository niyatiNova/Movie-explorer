function TrailerModal({ trailerKey, onClose }) {
  if (!trailerKey) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20
                     flex items-center justify-center
                     w-12 h-12 rounded-full
                     bg-red-600 hover:bg-red-700
                     text-white text-2xl
                     transition duration-300"
        >
          ✕
        </button>

        {/* Trailer */}
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