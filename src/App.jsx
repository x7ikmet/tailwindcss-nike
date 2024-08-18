import {
	CustomerReviwes,
	Footer,
	Hero,
	PouplarProduct,
	Services,
	SpecialOffers,
	Subscribe,
	SuperQuality,
} from "./sections";
import Nav from "./components/Nav";

const App = () => {
	return (
		<main className="relative ">
			<Nav />
			<section className="xl:padding-l wide:padding-r padding-b ">
				<Hero />
			</section>
			<section className="padding">
				<PouplarProduct />
			</section>
			<section className="padding">
				<SuperQuality />
			</section>
			<section className="padding">
				<Services />
			</section>
			<section className="bg-pale-blue padding">
				<CustomerReviwes />
			</section>
			<section className="padding-x sm:py-32 py-16 w-full">
				<Subscribe />
			</section>
			<section className="bg-black padding-x padding-t pb-8">
				<Footer />
			</section>
		</main>
	);
};
export default App;
