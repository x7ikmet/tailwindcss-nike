import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<img
				src={imgURL}
				alt={customerName}
				className="w-[120px] h-[120px] rounded-full object-cover"
			/>
			<h3 className="text-3xl font-bold font-palanquin mt-1">
				{customerName}
			</h3>
			<p className="mt-6 text-center info-text max-w-sm">{feedback}</p>
			<div className="mt-3 flex justify-center items-center gap-2.5">
				<img
					src={star}
					width={24}
					height={24}
					className="object-contain m-0"
				/>
				<p className="text-xl font-montserrat text-slate-gray">
					{rating}
				</p>
			</div>
		</div>
	);
};

export default ReviewCard;
