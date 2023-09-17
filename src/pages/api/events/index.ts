import type { APIRoute } from "astro";
import serverAuth from "../../../auth/server";
import eventsCollection from "../../../firebase/collections/events";
import type { Event } from "../../../models/client/event.model";

export const GET: APIRoute = async ({ cookies }) => {
	const session = cookies.get("session");
	const user = await serverAuth.getUser(session?.value);
	if (!user) {
		return new Response("Invalid session", { status: 401 });
	}

	const serverEvents = await eventsCollection.getEvents(user.uid);
	const clientEvents = serverEvents.map((event) => ({
		id: event.id,
		date: event.date.toDate()
	}) as Event);
	return new Response(JSON.stringify(clientEvents));
};