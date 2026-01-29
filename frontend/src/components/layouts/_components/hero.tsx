"use client";

import Image from "next/image";

const Hero = () => {
	return (
		<section className="w-full bg-white">
			<div className="max-w-screen-2xl mx-auto px-4 py-8">
				<div className="relative w-full aspect-[16/5] overflow-hidden rounded-2xl shadow-lg group">
					<Image
						src="/hero-products.png"
						alt="Collection of premium printed products"
						fill
						className="object-cover transition-transform duration-700 group-hover:scale-105"
						priority
					/>
					{/* Overlay Content */}
					<div className="absolute inset-0 bg-black/20 flex flex-col justify-center px-12 text-white">
						<div className="max-w-2xl bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
							<h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
								Dịch vụ Photocopy & In ấn <br />
								<span className="text-[#00A4E4]">Chuyên Nghiệp</span>
							</h1>
							<p className="text-sm md:text-lg text-gray-200 mb-8 leading-relaxed">
								Từ bưu ảnh, giấy khen đến bản vẽ kỹ thuật A0. <br />
								Hoàng Dũng mang đến chất lượng in ấn tốt nhất cho mọi công trình và kỷ niệm của bạn.
							</p>
							<div className="flex gap-4">
								<button
									type="button"
									className="px-8 py-3 bg-[#00A4E4] hover:bg-[#008cc2] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-[#00A4E4]/40"
								>
									Liên hệ ngay
								</button>
								<button
									type="button"
									className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-full transition-all"
								>
									Xem báo giá
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
