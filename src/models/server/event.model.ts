import { Timestamp } from "firebase-admin/firestore";

export interface Event {
	id: string;
	createdAt: Timestamp;
	name: string;
	description: string;
	date: Timestamp;
	bannerUrl: string;
	bannerBase64: string;
	acceptingParticipants: boolean;
}