self.addEventListener('message', (event) => {
    const data = event.data;
    const result = processData(data);

    // Send the result back to the main thread
    self.postMessage(result);
  });

  function processData(data) {
    // Perform some computationally intensive task here
    return data * 2;
  }