import { getFirestore } from "firebase-admin/firestore";
import type { Event } from "../../models/server/event.model";
import { app } from "../server";

async function getEvents(userId: string) {
	const db = getFirestore(app);
	const snapshot = await db.collection("events")
		.where("userId", "==", userId)
		.get();

	return snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data()
	} as Event));
}

async function getEvent(eventId: string) {
	const db = getFirestore(app);
	const doc = await db.collection("events")
		.doc(eventId)
		.get();

	if (doc.exists) {
		return ({
			id: doc.id,
			...doc.data()
		} as Event);
	}
	return undefined;
}

const eventsCollection = {
	getEvents,
	getEvent
};
export default eventsCollection;