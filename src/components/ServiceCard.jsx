const ServiceCard = ({ imgURL, label, subtext }) => {
	return (
		<div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-3xl shadow-3xl py-16 px-9">
			<div className="bg-coral-red w-11 h-11 flex justify-center items-center rounded-full">
				<img src={imgURL} width={24} height={24} />
			</div>
			<h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
				{label}
			</h3>
			<p className="mt-3 font-montserrat text-lg text-slate-gray leading-normal">
				{subtext}
			</p>
		</div>
	);
};

export default ServiceCard;
