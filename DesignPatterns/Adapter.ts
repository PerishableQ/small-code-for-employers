interface IPhone {
	lightning(): string;
}

interface Xiaomi {
	typeC(): string;
}

class IPhoneSmartphone implements IPhone {
	lightning() {
		console.log("Charging with lightning");
		return "Charging with lightning";
	}
}

class XiaomiSmartphone implements Xiaomi {
	typeC() {
		return "Charging with typ-C";
	}
}

class IPhoneAdapter {
	private iPhone: IPhone;

	constructor(smartphone: IPhone) {
		this.iPhone = smartphone;
	}

	public chargeViaTypeC() {
		console.log("using type-C instead of lightning");
		this.iPhone.lightning();
	}
}

const iphone = new IPhoneSmartphone();
const adapter = new IPhoneAdapter(iphone);

adapter.chargeViaTypeC();
