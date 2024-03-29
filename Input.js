class Input {
  calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect(),
        root = document.documentElement;

    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
  }
}