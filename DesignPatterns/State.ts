interface State {
	cancelOrder();
	verifyPayment();
	shipOrder();
}

class Order {
	private currentState: State;

	public cancelledOrderState: State;
	public pendingPaymentState: State;
	public orderShippingState: State;
	public orderBeingPreparedState: State;

	constructor() {
		this.cancelledOrderState = new CancelledOrder(this);
		this.pendingPaymentState = new PaymentPendingState(this);
		this.orderShippingState = new OrderShipped(this);
		this.orderBeingPreparedState = new OrderBeingPrepared(this);

		this.setState(this.pendingPaymentState);
	}

	public setState(state: State) {
		this.currentState = state;
	}

	public getState() {
		return this.currentState;
	}
}

class PaymentPendingState implements State {
	private order: Order;

	constructor(order: Order) {
		this.order = order;
	}

	cancelOrder() {
		console.log("cancelling your unpaid order");
		this.order.setState(this.order.cancelledOrderState);
	}
	verifyPayment() {
		console.log("Payment veryfied! Shipping soon!");
		this.order.setState(this.order.orderBeingPreparedState);
	}
	shipOrder() {
		console.log("cannot ship order when payment is pending");
	}
}

class CancelledOrder implements State {
	private order: Order;

	constructor(order: Order) {
		this.order = order;
	}

	cancelOrder() {
		console.log("your order is already cancellend");
	}
	verifyPayment() {
		console.log("order is cancelled");
	}
	shipOrder() {
		console.log("order is cancelled");
	}
}

class OrderBeingPrepared implements State {
	private order: Order;

	constructor(order: Order) {
		this.order = order;
	}

	cancelOrder() {
		console.log("cancelling the order");
		this.order.setState(this.order.cancelledOrderState);
	}
	verifyPayment() {
		console.log("already veryfied payment");
	}
	shipOrder() {
		console.log("preparing for shipping");
		this.order.setState(this.order.orderBeingPreparedState);
	}
}

class OrderShipped implements State {
	private order: Order;

	constructor(order: Order) {
		this.order = order;
	}

	cancelOrder() {
		console.log("cannot cancel, order already shipped");
	}
	verifyPayment() {
		console.log("cannot verify, already shipped");
	}
	shipOrder() {
		console.log("cannot ship, already shipped");
	}
}

const order = new Order();

console.log(order.getState().constructor.name);
