const EmbedEvent = ({ handleClose }) => {
  return (
    <div className="flex flex-col items-center py-10">
      <embed
        src="https://demo.agendakota.id/embed-event/9e1e9b04-91cc-4ecd-942e-85218e130473"
        style={{
          minHeight: "600px",
          width: "100%",
          maxWidth: "1000px",
          border: "none",
          borderRadius: "16px",
        }}
      />
      <button
        onClick={handleClose}
        className="mt-4 px-2 py-1 md:px-4 md:py-2 text-red-500 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-transparent border-red-500 border-2"
        style={{
          background: "",
        }}
      >
        ✕ Tutup
      </button>
    </div>
  );
};

export default EmbedEvent;
