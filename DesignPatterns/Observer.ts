interface Subject {
	registerObserver(o: Observer);
	removeObserver(o: Observer);
	notifyObserver();
}

interface Observer {
	update(temperature: number);
}

class WeatherStation implements Subject {
	private observers: Observer[] = [];
	private temperature: number;

	setTemperature(temp: number) {
		console.log("new temperature measurement: " + temp);
		this.temperature = temp;
		this.notifyObserver();
	}

	registerObserver(o: Observer) {
		this.observers.push(o);
	}
	removeObserver(o: Observer) {
		const index = this.observers.indexOf(o);
		this.observers.splice(index, 1);
	}
	notifyObserver() {
		this.observers.forEach(el => el.update(this.temperature));
	}
}

class TemperatureDisplay implements Observer {
	private subject: Subject;

	constructor(weatherStation: WeatherStation) {
		this.subject = weatherStation;
		weatherStation.registerObserver(this);
	}

	update(temperature: number) {
		console.log("need to update temperature");
	}
}

class Fan implements Observer {
	private subject: Subject;

	constructor(weatherStation: WeatherStation) {
		this.subject = weatherStation;
		weatherStation.registerObserver(this);
	}

	update(temperature: number) {
		if (temperature > 20) {
			console.log("turning on fan");
		} else {
			console.log("nice and cool");
		}
	}
}

const weatherStation = new WeatherStation();

const tempDisplay = new TemperatureDisplay(weatherStation);
const fan = new Fan(weatherStation);

weatherStation.setTemperature(25);
