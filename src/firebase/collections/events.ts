import { getFirestore } from "firebase-admin/firestore";
import { getDownloadURL, getStorage } from "firebase-admin/storage";
import type { Event } from "../../models/server/event.model";
import utils from "../../utils";
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
		// banner file
		const st = getStorage(app);
		const bannerFile = st.bucket().file(`events/${eventId}/banner`);
		const bannerUrl = await getDownloadURL(bannerFile);
		const bannerBase64 = await utils.imageUrlToBase64(bannerUrl);

		return ({
			id: doc.id,
			bannerUrl,
			bannerBase64,
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