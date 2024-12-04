// Review
// Valutazione numerica da 1 a 5 stelle
// Commento testuale opzionale
// Deve essere associata a un corso specifico
// Deve essere associata allo studente che l’ha scritta
// Registra la data in cui è stata lasciata
// Uno studente può lasciare una sola recensione per corso

import mongoose, { type Types } from "mongoose";

export interface IReview extends Document {
	rating: number;
	comment?: string;
	course: Types.ObjectId;
	student: Types.ObjectId;
	date: Date;
}

const reviewSchema = new mongoose.Schema<IReview>({
	rating: {
		type: Number,
		min: 1,
		max: 5,
		required: true,
	},
	comment: {
		type: String,
	},
	course: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Course",
		required: true,
	},
	student: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Student",
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

export const Review = mongoose.model<IReview>("Review", reviewSchema);
