"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { cn } from "~/utils/cn";

interface ContactItemProps {
	icon: React.ReactNode;
	children: React.ReactNode;
	href?: string;
	target?: string;
	rel?: string;
}

const ContactItem = ({
	icon,
	children,
	href,
	target,
	rel,
}: ContactItemProps) => {
	const content = (
		<div className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
			<span className="text-muted-foreground/70">{icon}</span>
			<span>{children}</span>
		</div>
	);

	if (href) {
		return (
			<a
				href={href}
				target={target}
				rel={rel}
				className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
			>
				{content}
			</a>
		);
	}

	return content;
};

interface UtilityBarProps {
	className?: string;
}

const UtilityBar = ({ className }: UtilityBarProps) => {
	return (
		<div
			className={cn(
				"w-full bg-secondary/80 border-b border-border/30 backdrop-blur-md",
				"hidden md:block",
				className,
			)}
		>
			<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-10">
					<nav
						className="flex items-center h-full"
						aria-label="Contact information"
					>
						<div className="flex items-center gap-0 h-full border-r border-border/30">
							<div className="px-6 border-l border-border/30 h-full flex items-center bg-background/20 group cursor-pointer transition-colors hover:bg-background/40">
								<ContactItem
									icon={<Mail size={12} className="text-primary" />}
									href="mailto:photocopyhoangdung1974@gmail.com"
								>
									<span className="font-mono tracking-tight lowercase">
										photocopyhoangdung1974@gmail.com
									</span>
								</ContactItem>
							</div>
							<div className="px-6 border-l border-border/30 h-full flex items-center bg-background/20 group cursor-pointer transition-colors hover:bg-background/40">
								<ContactItem
									icon={<Phone size={12} className="text-primary" />}
									href="tel:+84983959195"
								>
									<span className="font-mono tracking-tight text-[11px]">
										(+84) 0983 959 195
									</span>
								</ContactItem>
							</div>
							<div className="px-6 border-l border-border/30 h-full flex items-center bg-background/20 group cursor-pointer transition-colors hover:bg-background/40">
								<ContactItem
									icon={<MapPin size={12} className="text-primary" />}
									href="https://maps.google.com/?q=68A+đường+30/4+phường+Cao+Lãnh+Đồng+Tháp"
									target="_blank"
									rel="noopener noreferrer"
								>
									<span className="font-light tracking-tight">
										68A, đường 30/4, Cao Lãnh, Đồng Tháp
									</span>
								</ContactItem>
							</div>
						</div>
					</nav>

					<div className="h-full flex items-center border-l border-border/30 px-6 bg-primary/5 text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground/50">
						System Status: <span className="text-green-500 ml-2">Active</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UtilityBar;
