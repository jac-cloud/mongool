import type { ICourse } from "../models/course";
import { Enrollement } from "../models/enrollements";
import { Review } from "../models/review";
import type { IStudent } from "../models/student";

export function Enroll(student: IStudent, course: ICourse): void {
	const enrollement = new Enrollement({
		student_id: student._id,
		course_id: course._id,
	});

	enrollement.save();
}

export function Unenroll(student: IStudent, course: ICourse): void {
	Enrollement.deleteOne({
		student_id: student._id,
		course_id: course._id,
	});
}

export function ReviewCourse(
	student: IStudent,
	course: ICourse,
	rating: number,
	comment?: string,
): void {
	const review = new Review({
		rating,
		comment,
		course: course._id,
		student: student._id,
	});

	review.save();
}

export function DeleteReview(student: IStudent, course: ICourse): void {
	Review.deleteOne({
		student: student._id,
		course: course._id,
	});
}
