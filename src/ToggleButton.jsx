function ToggleButton({ isOpen, setIsOpen }) {
  return (
    <button
      className="close"
      onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
    >
      {isOpen ? <>&times;</> : <>&#128065;</>}
    </button>
  );
}

export default ToggleButton;
