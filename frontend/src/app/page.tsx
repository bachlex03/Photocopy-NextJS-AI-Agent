import ExploreCategories from "~/components/layouts/_components/explore-categories";
import Hero from "~/components/layouts/_components/hero";
import Header from "~/components/layouts/header";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col">
			<Header />
			<Hero />
			<ExploreCategories />

			{/* <main className="flex-1 max-w-screen-2xl mx-auto w-full p-8">
				<div className="bg-white rounded-xl border border-gray-200 p-12 flex flex-col items-center justify-center text-center">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Vistaprint Header Wireframe
					</h1>
					<p className="text-gray-600 max-w-md">
						This is a production-grade wireframe of the Vistaprint global
						navigation system, featuring utility links, search, user actions,
						category navigation, and promotions.
					</p>

					<div className="mt-8 flex gap-4">
						<div className="px-4 py-2 bg-[#00A4E4] text-white rounded-md text-sm font-semibold">
							Next.js 14
						</div>
						<div className="px-4 py-2 bg-[#F5F5F5] text-gray-800 rounded-md text-sm font-semibold border border-gray-200">
							Tailwind CSS v4
						</div>
					</div>
				</div>
			</main> */}

			{/* <footer className="py-12 bg-white border-t border-gray-100 mt-auto">
				<div className="max-w-screen-2xl mx-auto px-4 text-center text-gray-500 text-sm">
					Wireframe developed by Antigravity Frontend Specialist
				</div>
			</footer> */}
		</div>
	);
}
