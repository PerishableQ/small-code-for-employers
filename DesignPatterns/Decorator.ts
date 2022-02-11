abstract class Cola {
	public abstract getPrice(): number;
	public abstract changeFlavour(): string;
}

class HelloCola extends Cola {
	public getPrice(): number {
		return 70;
	}
	public changeFlavour(): string {
		return "Hello Cola flavour, not original";
	}
}

class CocaCola extends Cola {
	public getPrice(): number {
		return 100;
	}
	public changeFlavour(): string {
		return "Coca Cola flavour, original";
	}
}

abstract class NewTypeOfCola {
	decoratedCola: Cola;
	public abstract getPrice(): number;
	public abstract changeFlavour(): string;
}

class GoodByeCola extends NewTypeOfCola {
	public decoratedCola: Cola;

	constructor(cola: Cola) {
		super();
		this.decoratedCola = cola;
	}

	public getPrice(): number {
		return this.decoratedCola.getPrice() + 20;
	}
	public changeFlavour(): string {
		return "Good Bye Cola flavour, not original";
	}
}

const cocaCola = new HelloCola();
const goodByeCola = new GoodByeCola(cocaCola);

console.log(cocaCola.changeFlavour());
console.log(goodByeCola.changeFlavour());
