"use client";

import {
	Clock,
	Mail,
	MapPin,
	MessageSquare,
	Phone,
	Send,
	User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button, Input } from "~/components/ui";
import { cn } from "~/utils/cn";

const contactChannels = [
	{
		id: "voice",
		label: "Voice Channel",
		value: "(+84) 0983 959 195",
		icon: <Phone className="w-5 h-5" />,
		detail: "Direct Engineering Support",
		href: "tel:+84983959195",
	},
	{
		id: "data",
		label: "Data Transfer",
		value: "photocopyhoangdung1974@gmail.com",
		icon: <Mail className="w-5 h-5" />,
		detail: "Secure Project Submissions",
		href: "mailto:photocopyhoangdung1974@gmail.com",
	},
	{
		id: "geo",
		label: "Physical Location",
		value: "68A, đường 30/4, Cao Lãnh",
		icon: <MapPin className="w-5 h-5" />,
		detail: "Reproduction Center HQ",
		href: "https://maps.google.com/?q=68A+đường+30/4+phường+Cao+Lãnh+Đồng+Tháp",
	},
];

const ContactSystem = ({ className }: { className?: string }) => {
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
			{ threshold: 0.1 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="contact"
			className={cn(
				"w-full bg-background py-24 md:py-32 relative border-t border-border/30 overflow-hidden",
				className,
			)}
		>
			<div className="absolute inset-0 bg-grid-technical opacity-40 pointer-events-none" />

			<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
					<div
						className={cn(
							"transition-all duration-1000",
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-12",
						)}
					>
						<div className="mb-16">
							<span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-4 block">
								Communication Protocol
							</span>
							<h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none">
								System <br /> Support
							</h2>
							<p className="text-muted-foreground text-lg font-light leading-relaxed max-w-md">
								Initialize a support request or project inquiry through our
								calibrated communication channels.
							</p>
						</div>

						<div className="space-y-0 border border-border/50 bg-card/10">
							{contactChannels.map((channel, index) => (
								<a
									key={channel.id}
									href={channel.href}
									target={channel.id === "geo" ? "_blank" : undefined}
									rel={channel.id === "geo" ? "noopener noreferrer" : undefined}
									className={cn(
										"group flex items-center gap-8 p-8 border-b border-border/30 last:border-b-0",
										"hover:bg-primary/5 transition-all duration-500",
									)}
								>
									<div className="w-14 h-14 bg-secondary flex items-center justify-center border border-border/50 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
										{channel.icon}
									</div>
									<div className="flex-1">
										<div className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest mb-1">
											{channel.label} // 0{index + 1}
										</div>
										<div className="text-xl font-bold tracking-tight text-foreground mb-1">
											{channel.value}
										</div>
										<div className="text-xs text-muted-foreground/60 font-light">
											{channel.detail}
										</div>
									</div>
								</a>
							))}
						</div>

						<div className="mt-12 p-8 border border-primary/20 bg-primary/2">
							<div className="flex items-center gap-3 text-primary mb-6">
								<Clock className="w-4 h-4" />
								<span className="text-[10px] font-bold uppercase tracking-[0.2em]">
									Standard Operating Hours
								</span>
							</div>
							<div className="grid grid-cols-2 gap-8">
								<div>
									<div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
										Monday - Saturday
									</div>
									<div className="text-lg font-bold">07:00 - 20:00</div>
								</div>
								<div>
									<div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
										Sunday Support
									</div>
									<div className="text-lg font-bold">08:00 - 17:00</div>
								</div>
							</div>
						</div>
					</div>

					<div
						className={cn(
							"transition-all duration-1000 delay-300",
							isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-12",
						)}
					>
						<div className="p-8 md:p-12 bg-neutral-900 border border-border/50 relative">
							<div className="absolute top-0 right-0 w-24 h-24 bg-grid-technical opacity-20 pointer-events-none" />
							<div className="absolute top-4 right-4 text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">
								Form UID: REPRO-SUB-X
							</div>

							<h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tight flex items-center gap-4">
								<span className="w-8 h-px bg-primary" />
								Inquiry System
							</h3>

							<form className="space-y-6">
								<div className="space-y-2">
									<label
										htmlFor="name"
										className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-2"
									>
										<User className="w-3 h-3" /> User Identity
									</label>
									<Input
										id="name"
										placeholder="ENTER FULL NAME"
										className="rounded-none border-x-0 border-t-0 border-b-2 border-white/10 bg-white/5 focus:bg-white/10 transition-all h-12 text-white placeholder:text-white/10"
									/>
								</div>

								<div className="space-y-2">
									<label
										htmlFor="email"
										className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-2"
									>
										<Mail className="w-3 h-3" /> Routing Address
									</label>
									<Input
										id="email"
										type="email"
										placeholder="NAME@DOMAIN.COM"
										className="rounded-none border-x-0 border-t-0 border-b-2 border-white/10 bg-white/5 focus:bg-white/10 transition-all h-12 text-white placeholder:text-white/10"
									/>
								</div>

								<div className="space-y-2">
									<label
										htmlFor="message"
										className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-2"
									>
										<MessageSquare className="w-3 h-3" /> Project Matrix Spec
									</label>
									<textarea
										id="message"
										rows={5}
										placeholder="DESCRIBE PROJECT REQUIREMENTS..."
										className="w-full rounded-none border-x-0 border-t-0 border-b-2 border-white/10 bg-white/5 focus:bg-white/10 transition-all p-4 text-white placeholder:text-white/10 focus:outline-none resize-none"
									/>
								</div>

								<Button
									className="w-full h-16 rounded-none bg-primary text-white hover:bg-white hover:text-black transition-all duration-500 font-bold uppercase tracking-[0.3em]"
									type="submit"
								>
									Initialize Inquiry
									<Send className="w-4 h-4 ml-4" />
								</Button>
							</form>
						</div>

						<div className="mt-8 flex items-center gap-6">
							<div className="flex-1 h-px bg-border/20" />
							<p className="text-[10px] text-muted-foreground/40 italic uppercase tracking-widest">
								Secure Transmission Protocol Active
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSystem;
