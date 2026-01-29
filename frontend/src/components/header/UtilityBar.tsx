"use client";

import { Mail, MapPin, Phone } from "lucide-react";

const UtilityBar = () => {
	return (
		<div className="w-full bg-[#F5F5F5] py-2 px-4 border-b border-gray-200 hidden md:block">
			<div className="max-w-screen-2xl mx-auto flex justify-between items-center">
				<div className="flex gap-6">
					<div className="flex items-center gap-2 text-xs font-medium text-gray-700">
						<Mail size={14} className="text-gray-500" />
						<span>photocopyhoangdung1974@gmail.com</span>
					</div>
					<div className="flex items-center gap-2 text-xs font-medium text-gray-700">
						<Phone size={14} className="text-gray-500" />
						<span>(+84) 0983959195</span>
					</div>
					<div className="flex items-center gap-2 text-xs font-medium text-gray-700">
						<MapPin size={14} className="text-gray-500" />
						<span>68A, đường 30/4, phường Cao Lãnh, tỉnh Đồng Tháp</span>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default UtilityBar;
