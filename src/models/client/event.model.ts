export interface Event {
	id: string;
	createdAt: Date;
	name: string;
	description: string;
	date: Date;
	bannerUrl: string;
	bannerBase64: string;
	acceptingParticipants: boolean;
}