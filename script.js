//your JS code here. If required.
// Select elements
const gridContainer = document.getElementById('grid-container');
const blockIdInput = document.getElementById('block_id');
const colorInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('Reset');

// Reset grid background colors to transparent
function resetGridColors() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => item.style.backgroundColor = 'transparent');
}

// Change the background color of a specific grid item
function changeColor() {
  const blockId = blockIdInput.value;
  const color = colorInput.value;

  // Reset all grid items to transparent
  resetGridColors();

  // Validate and apply the color
  const gridItem = document.getElementById(blockId);
  if (gridItem) {
    gridItem.style.backgroundColor = color;
  } else {
    alert('Invalid Block ID. Please enter a number between 1 and 9.');
  }
}

// Add event listeners to buttons
changeButton.addEventListener('click', changeColor);
resetButton.addEventListener('click', resetGridColors);
