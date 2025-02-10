const EmbedEvent = ({ handleClose }) => {
  return (
    <div className="flex flex-col items-center py-10">
      <embed
        src="https://demo.agendakota.id/embed-event/9e1e9b04-91cc-4ecd-942e-85218e130473"
        className="rounded-xl shadow-lg"
        style={{
          minHeight: "700px",
          width: "90%",
          maxWidth: "900px",
          border: "none",
        }}
      />
      <button
        onClick={handleClose}
        className="mt-4 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
        style={{
          background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
        }}
      >
        ✕ Close
      </button>
    </div>
  );
};

export default EmbedEvent;
