import { Subscription } from 'rxjs';

export function clearSubscription(subscription: Subscription): void {
	if(subscription && !subscription.closed) {
		subscription.unsubscribe();
	}
}
