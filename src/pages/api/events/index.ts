import type { APIRoute } from "astro";
import serverAuth from "../../../auth/server";
import eventsCollection from "../../../firebase/collections/events";
import type { Event } from "../../../models/client/event.model";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
	// get token from request headers
	const token = request.headers.get("Authorization")?.split("Bearer ")[1];
	if (!token) {
		return new Response("No token found", { status: 401 });
	}
	// validate token
	const user = await serverAuth.getUser(token);
	if (!user) {
		return new Response("Invalid token", { status: 401 });
	}

	const serverEvents = await eventsCollection.getEvents(user.uid);
	const clientEvents = serverEvents.map((event) => ({
		id: event.id,
		date: event.date.toDate()
	}) as Event);
	return new Response(JSON.stringify(clientEvents));
};