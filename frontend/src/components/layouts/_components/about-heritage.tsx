"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "~/utils/cn";

const stats = [
	{ label: "Founded", value: "1974", detail: "Origin Point" },
	{ label: "Daily Output", value: "50k+", detail: "Unit/Reproduction" },
	{ label: "Accuracy", value: "99.9%", detail: "ISO Calibration" },
	{ label: "Legacy", value: "50y", detail: "System Longevity" },
];

const AboutHeritage = ({ className }: { className?: string }) => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.2 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="about"
			className={cn(
				"w-full bg-neutral-950 py-24 md:py-32 relative overflow-hidden",
				className,
			)}
		>
			<div className="absolute inset-0 bg-grid-technical opacity-[0.03] pointer-events-none" />

			<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
					<div
						className={cn(
							"lg:col-span-7 transition-all duration-1000",
							isVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-12",
						)}
					>
						<div className="mb-12">
							<span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 block">
								Legacy Documentation // v.1974
							</span>
							<h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
								Inherited <br />
								<span className="text-transparent stroke-white stroke-1 [-webkit-text-stroke:1px_white]">
									Accuracy
								</span>
							</h2>
							<div className="w-24 h-1 bg-primary mb-10" />
							<p className="text-xl text-neutral-400 font-light leading-relaxed max-w-2xl">
								Hoang Dung Photocopy was established during the first wave of
								reproduction technology in Dong Thap. For half a century, we
								have maintained a strict protocol of precision, evolving from
								analog darkroom processes to state-of-the-art digital imaging
								systems.
							</p>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10">
							{stats.map((stat) => (
								<div
									key={stat.label}
									className={cn(
										"p-6 md:p-8 flex flex-col items-center justify-center text-center",
										"border-r border-white/10 last:border-r-0 border-b md:border-b-0",
										"bg-white/2 hover:bg-white/5 transition-colors duration-500",
									)}
								>
									<span className="text-[9px] uppercase tracking-widest text-neutral-500 mb-2">
										{stat.detail}
									</span>
									<div className="text-3xl md:text-4xl font-black text-white mb-1 font-mono">
										{stat.value}
									</div>
									<div className="text-[10px] uppercase font-bold text-primary tracking-widest">
										{stat.label}
									</div>
								</div>
							))}
						</div>

						<div className="mt-12 flex items-center gap-4">
							<div className="h-px flex-1 bg-white/10" />
							<div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest italic">
								* Data Verified and Audited for 50 Year Anniversary
							</div>
						</div>
					</div>

					<div
						className={cn(
							"lg:col-span-5 relative h-[500px] lg:h-[700px] transition-all duration-1000 delay-300",
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-12",
						)}
					>
						<div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary z-20" />
						<div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary z-20" />

						<div className="relative w-full h-full grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 overflow-hidden border border-white/10 shadow-3xl">
							<Image
								src="/heritage-machine.png"
								alt="Vintage printing heritage"
								fill
								className="object-cover scale-110 hover:scale-100 transition-transform duration-2000"
							/>

							<div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-md border-l-4 border-primary">
								<div className="text-[10px] font-mono text-primary mb-2 uppercase tracking-widest">
									System Archive: #HF-1974
								</div>
								<div className="text-white text-sm font-bold uppercase tracking-tight">
									Hoang Dung Mechanical Reproduction Unit
								</div>
								<div className="mt-4 text-xs text-neutral-400 font-light italic">
									"The machines change, the precision remains constant."
								</div>
							</div>
						</div>

						<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-1/2 bg-primary/5 blur-[120px]" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutHeritage;
