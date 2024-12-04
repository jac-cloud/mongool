import type { Types } from "mongoose";
import { Course } from "../models/course";
import { Review } from "../models/review";

export function CreateCourse(name: string, description: string): void {
	const course = new Course({
		name,
		description,
	});

	course.save();
}

export function DeleteCourse(id: Types.ObjectId): void {
	Course.deleteOne({ _id: id });
}

export async function GetRating(course: Types.ObjectId): Promise<number> {
	const reviews = await Review.find({ course });

	if (reviews.length === 0) {
		return 0;
	}

	return (
		reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
	);
}
