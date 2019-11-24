onmessage = function(e) {
    let result = e.data + 1;
    postMessage(result);
}