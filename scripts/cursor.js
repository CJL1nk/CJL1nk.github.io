document.addEventListener('DOMContentLoaded', function () {
	// Create the cursor element
	const cursor = document.getElementById('custom-cursor') || document.createElement('div');
	cursor.id = 'custom-cursor';
	document.body.appendChild(cursor);

	document.addEventListener('mousemove', function (e) {
	  // Update cursor position
	  cursor.style.left = e.pageX + 'px';
	  cursor.style.top = e.pageY + 'px';
	});
  });
