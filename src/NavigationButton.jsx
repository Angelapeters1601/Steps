function NavigationButton({ text, onClick, textColor, bgColor, children }) {
  return (
    <div>
      <button
        style={{ color: textColor, backgroundColor: bgColor }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default NavigationButton;
