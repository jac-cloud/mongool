// Corso
// Il titolo del corso deve essere sempre presente
// Una descrizione dettagliata del contenuto
// Il livello può essere solo: base, intermedio o avanzato
// Il prezzo non può essere negativo
// Tiene traccia del numero di studenti iscritti
// Ha un rating medio basato sulle recensioni ricevute (da 1 a 5 stelle)

import mongoose, { type Types } from "mongoose";

export interface ICourse extends Document {
	_id: Types.ObjectId;
	title: string;
	description: string;
	level: "base" | "intermedio" | "avanzato";
	price: number;
	owner: Types.ObjectId;
}

const courseSchema = new mongoose.Schema<ICourse>({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	level: {
		type: String,
		enum: ["base", "intermedio", "avanzato"],
		required: true,
	},
	price: {
		type: Number,
		min: 0,
		required: true,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Student",
		required: true,
	},
});

export const Course = mongoose.model<ICourse>("Course", courseSchema);
