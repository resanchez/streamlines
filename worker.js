onmessage = function(e) {
    let result = e.data[0] + 1;
    postMessage(result);
}