import type { APIRoute } from "astro";
import { getFirestore } from "firebase-admin/firestore";
import { app } from "../../../firebase/server";

export const POST: APIRoute = async ({ request, redirect }) => {
	const formData = await request.formData();
	const name = formData.get("name")?.toString();
	const age = formData.get("age")?.toString();
	const isBestFriend = formData.get("isBestFriend") === "on";

	if (!name || !age) {
		return new Response("Missing required fields", {
			status: 400,
		});
	}
	try {
		const db = getFirestore(app);
		const friendsRef = db.collection("friends");
		await friendsRef.add({
			name,
			age: parseInt(age),
			isBestFriend,
		});
	} catch (error) {
		return new Response("Something went wrong", {
			status: 500,
		});
	}
	return redirect("/dashboard");
};