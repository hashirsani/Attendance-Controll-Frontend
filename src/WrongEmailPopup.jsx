import useAuthStore from "./Combine/store";

const WrongEmailPopup = () => {
  const error = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  if (!error) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      onClick={clearError}
    >
      <div
        className="bg-white rounded-xl shadow-lg p-6 w-80 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-red-600 mb-2">Login Error</h2>
        <p className="text-gray-600">{error}</p>

        <button
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md"
          onClick={clearError}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default WrongEmailPopup;
