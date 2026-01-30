"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "~/utils/cn";

const links = {
	capabilities: [
		{ label: "Engineering Prints", href: "#" },
		{ label: "Technical Scanning", href: "#" },
		{ label: "Architectural Large Format", href: "#" },
		{ label: "Precision Binding", href: "#" },
	],
	system: [
		{ label: "Initialize Support", href: "#contact" },
		{ label: "Legacy Archive", href: "#about" },
		{ label: "Service Catalog", href: "#" },
		{ label: "Privacy Protocol", href: "#" },
	],
};

const TechnicalFooter = ({ className }: { className?: string }) => {
	return (
		<footer
			className={cn(
				"w-full bg-neutral-950 text-white py-16 border-t border-white/10 relative overflow-hidden",
				className,
			)}
		>
			<div className="absolute inset-0 bg-grid-technical opacity-5 pointer-events-none" />

			<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
					<div className="lg:col-span-1">
						<Link href="/" className="inline-block mb-8">
							<Image
								src="/hoangdung-logo.svg"
								alt="Hoang Dung"
								width={140}
								height={36}
								className="h-8 w-auto invert brightness-0"
							/>
						</Link>
						<p className="text-neutral-500 text-xs font-light leading-relaxed mb-8 uppercase tracking-wider">
							Precision reproduction systems based in Dong Thap since 1974.
							Engineering accuracy through five Decades of technological
							evolution.
						</p>
						<div className="flex gap-4">
							<div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-primary transition-colors cursor-pointer">
								FB
							</div>
							<div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-primary transition-colors cursor-pointer">
								IG
							</div>
							<div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-primary transition-colors cursor-pointer">
								LI
							</div>
						</div>
					</div>

					<div>
						<h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 border-l-2 border-primary pl-4">
							Capability Matrix
						</h4>
						<ul className="space-y-4">
							{links.capabilities.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-neutral-500 hover:text-white text-xs uppercase tracking-widest transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 border-l-2 border-primary pl-4">
							System Resources
						</h4>
						<ul className="space-y-4">
							{links.system.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-neutral-500 hover:text-white text-xs uppercase tracking-widest transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<div className="p-6 border border-white/10 bg-white/2">
							<div className="text-[10px] font-mono text-neutral-600 mb-4 uppercase tracking-[0.2em]">
								Instance Metadata
							</div>
							<div className="space-y-4">
								<div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
									<span className="text-neutral-500">Node Status:</span>
									<span className="text-green-500">Operational</span>
								</div>
								<div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
									<span className="text-neutral-500">Timezone:</span>
									<span className="text-neutral-300">GMT+7</span>
								</div>
								<div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
									<span className="text-neutral-500">Region Tag:</span>
									<span className="text-neutral-300">DT-VNM</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="text-[9px] font-mono text-neutral-600 uppercase tracking-[0.2em]">
						© {new Date().getFullYear()} Hoang Dung Reproduction Systems. All
						Files Encrypted.
					</div>
					<div className="flex gap-8">
						<div className="text-[9px] font-mono text-neutral-600 uppercase tracking-[0.2em] cursor-pointer hover:text-primary transition-colors">
							Terms of Protocol
						</div>
						<div className="text-[9px] font-mono text-neutral-600 uppercase tracking-[0.2em] cursor-pointer hover:text-primary transition-colors">
							Machine Audit
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden pointer-events-none opacity-20">
				<div className="absolute bottom-4 right-4 text-[6px] font-mono text-neutral-500 whitespace-nowrap uppercase transform rotate-90 origin-bottom-right tracking-[0.5em]">
					Accuracy Verification System v.2.4
				</div>
			</div>
		</footer>
	);
};

export default TechnicalFooter;
