import { getCustomRepository } from "typeorm";
import { ParticipantRole, IParticipant } from "../database/model/Participant";
import { IInterview } from "../database/model/Interview";
import ParticipantRepo from "../database/repository/ParticipantRepo";
import InterviewRepo from "../database/repository/InterviewRepo";

const seeder = async () => {
	const pRepo = getCustomRepository(ParticipantRepo);
	const iRepo = getCustomRepository(InterviewRepo);
	const participants: IParticipant[] = [
		{
			name: "Yuvraj Sahu",
			role: ParticipantRole.CANDIDATE,
			email: "sahuyuvraj777@gmail.com"
		},
		{
			name: "Umang Sahu",
			role: ParticipantRole.CANDIDATE,
			email: "sahuumang@email.com"
		},
		{
			name: "Vedant Pandey",
			role: ParticipantRole.CANDIDATE,
			email: "pandeyvedant@email.com"
		},

		{
			name: "Abhishek Tiwari",
			role: ParticipantRole.INTERVIEWER,
			email: "abhishek@gmail.com"
		},
		{
			name: "Parth",
			role: ParticipantRole.INTERVIEWER,
			email: "parthnitrr7@email.com"
		},
		{
			name: "Pradeep singh",
			role: ParticipantRole.INTERVIEWER,
			email: "singhpradeep@email.com"
		},
		{
			name: "Neha Singh",
			role: ParticipantRole.INTERVIEWER,
			email: "nehasingh@email.com"
		},
		
	];
	await pRepo.query("delete from participants");
	await iRepo.query("delete from interviews");
	await pRepo.save(participants);
};

export default seeder;
