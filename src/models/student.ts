// Studente
// Nome completo dello studente
// Email univoca per l’identificazione
// Livello di esperienza: junior, middle o senior
// Lista dei corsi a cui è iscritto
// Non può iscriversi due volte allo stesso corso

import mongoose, { type Types } from "mongoose";

export interface IStudent extends Document {
	_id: Types.ObjectId;
	name: string;
	email: string;
	experience: "junior" | "middle" | "senior";
}

const studentSchema = new mongoose.Schema<IStudent>({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	experience: {
		type: String,
		enum: ["junior", "middle", "senior"],
		required: true,
	},
});

export const Student = mongoose.model<IStudent>("Student", studentSchema);
