// Task 1

const startTimer = document.querySelector('#start');
const stopTimer = document.querySelector('#stop');
const newYear = document.querySelector('#newYear');


class Timer {
	constructor (startTime, stopTime) {
		this.startTime = startTime;
		this.stopTime = stopTime;
		this.interval = stopTime - startTime;
	}

	// get stopTime () {return this.stopExem}
	// set stopTime (end) {this.stopExem = end}

	start () {
		let dateStart = new Date();
		let getDateStart = dateStart.getTime();
		stopwatch.startTime = getDateStart;
		console.log(stopwatch.startTime);
		let startTime = dateStart.getHours()+':'+dateStart.getMinutes()+':'+dateStart.getSeconds()+':'+dateStart.getMilliseconds();
		document.querySelector('#showStartTime').innerHTML = `Время старт таймера - ${startTime}`;
	}

	stop () {
		let dateStop = new Date();
		let getDateStop = dateStop.getTime();
		stopwatch.stopTime = getDateStop;
		console.log(stopwatch.stopTime);
		stopwatch.interval = Math.abs(Math.round((stopwatch.startTime - stopwatch.stopTime))/1000);
		let stopTime = dateStop.getHours()+':'+dateStop.getMinutes()+':'+dateStop.getSeconds()+':'+dateStop.getMilliseconds();
		document.querySelector('#showStopTime').innerHTML = `Время стоп таймера - ${stopTime}`;
	}

	getTime () {
		console.log(stopwatch.interval);
		document.querySelector('#showInterval').innerHTML = `Время таймера - ${stopwatch.interval} секунд`;
	}

	static timeToNY () {
		let dateNow = new Date();
		let getDateNow = dateNow.getTime();
		let dateNewYear = new Date(2019, 0, 1);
		const options = {
		  era: 'long',
		  year: 'numeric',
		  month: 'long',
		  day: 'numeric',
		  weekday: 'long',
		  timezone: 'UTC',
		  hour: 'numeric',
		  minute: 'numeric',
		  second: 'numeric'
		};
		document.querySelector('#showNow').innerHTML = `Текущая дата: ${dateNow.toLocaleString("ru", options)}`;
		document.querySelector('#showNY').innerHTML = `Дата Нового Года: ${dateNewYear.toLocaleString("ru", options)}`;
		let remaining = dateNewYear - dateNow;
		remaining /= 1000; //seconds
		remaining /= 60; //minutes
		remaining /= 60; //hours
		remaining /= 24; //days
		let finalRemaining = Math.round(remaining);
		console.log(remaining);
		document.querySelector('#showDaysToNY').innerHTML = `До Нового Года осталось ${finalRemaining} дня`;
	}


}

// Примеры использования классов

let sampleOne = new Timer(8,16);
console.log(sampleOne.startTime);
console.log(sampleOne.stopTime);
console.log(sampleOne.interval);

let sampleTwo = new Timer(200,150);
console.log(sampleTwo.startTime);
console.log(sampleTwo.stopTime);
console.log(sampleTwo.interval);


// Наш таймер

let stopwatch = new Timer(200,150);


startTimer.addEventListener("click", stopwatch.start);
stopTimer.addEventListener("click", stopwatch.stop);
stopTimer.addEventListener("click", stopwatch.getTime);

newYear.addEventListener("click", Timer.timeToNY);