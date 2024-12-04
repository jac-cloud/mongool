import mongoose from "mongoose";

interface IEnrollement extends Document {
	student_id: mongoose.Schema.Types.ObjectId;
	course_id: mongoose.Schema.Types.ObjectId;
}

const enrollement = new mongoose.Schema<IEnrollement>({
	student_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Student",
		required: true,
	},
	course_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Course",
		required: true,
	},
});

enrollement.index({ student_id: 1, course_id: 1 }, { unique: true });

export const Enrollement = mongoose.model<IEnrollement>(
	"Enrollement",
	enrollement,
);
