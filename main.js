if (window.Worker) {
	const myWorker = new Worker("worker.js");

	myWorker.postMessage(0);


	myWorker.onmessage = function(e) {
		console.log(e.data);
	}
} else {
	console.log('Your browser doesn\'t support web workers.')
}