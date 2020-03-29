function isDraw(cellElements) {
  const X_CLASS = "x";
  const CIRCLE_CLASS = "circle";
  return [...cellElements].every(cell => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

export default isDraw;
