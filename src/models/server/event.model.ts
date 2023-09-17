import { Timestamp } from "firebase-admin/firestore";

export interface Event {
	id: string;
	createdAt: Date;
	name: string;
	date: Timestamp;
	description: string;
	acceptingParticipants: boolean;
}