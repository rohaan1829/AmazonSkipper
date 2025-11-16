"use client";

import { useState } from "react";
import Link from "next/link";

const WEB3FORMS_ACCESS_KEY = "81b771a1-1c8e-49e5-b12a-33de32382620";

const Contact3 = () => {
	const [status, setStatus] = useState({ type: "idle", message: "" });

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formElement = event.currentTarget;
		const formData = new FormData(formElement);

		const payload = {
			firstName: formData.get("conName")?.toString().trim() ?? "",
			lastName: formData.get("conLName")?.toString().trim() ?? "",
			email: formData.get("conEmail")?.toString().trim() ?? "",
			phone: formData.get("conPhone")?.toString().trim() ?? "",
			asin: formData.get("conAsin")?.toString().trim() ?? "",
			budget: formData.get("conBudget")?.toString().trim() ?? "",
			message: formData.get("conMessage")?.toString().trim() ?? "",
		};

		if (!payload.firstName || !payload.lastName || !payload.email || !payload.phone || !payload.budget) {
			setStatus({ type: "error", message: "Please fill in all required fields." });
			return;
		}

		setStatus({ type: "loading", message: "" });

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					subject: "New contact request from Amazon Skipper website",
					from_name: `${payload.firstName} ${payload.lastName}`.trim(),
					email: payload.email,
					phone: payload.phone,
					asin_or_url: payload.asin || "Not provided",
					project_budget: payload.budget || "Not specified",
					message: payload.message || "No additional comments",
				}),
			});

			const result = await response.json();

			if (!response.ok || !result.success) {
				const errorMessage = result?.message || "Unable to submit the form right now.";
				throw new Error(errorMessage);
			}

			formElement.reset();
			setStatus({ type: "success", message: "Thanks! We’ll be in touch shortly." });
		} catch (error) {
			console.error("Web3Forms submission error:", error);
			setStatus({
				type: "error",
				message: error instanceof Error ? error.message : "Something went wrong. Please try again later.",
			});
		}
	};

	return (
		<section id="contact">
			<div className=" dark:bg-black-color py-60px md:py-20 lg:py-100px xl:py-30">
				<div className="container">
					<div className="grid lg:grid-cols-12 gap-30px">
						{/* <!-- experience single area --> */}
						<div className="lg:col-start-1 lg:col-span-6 xl:col-span-5">
							<div className="mb-10  ">
								<div className="mb-25px  ">
									<span
										className="text-xs  uppercase text-primary-color  font-medium relative inline-block tracking-0.2em  wow fadeInUp"
										data-wow-delay=".3s"
									>
										Behind the Pixels
									</span>
								</div>
								<h2
									className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 font-semibold  leading-1.2 -tracking-0.02em inline-block text-seondary-color dark:text-white-color  mb-4 wow fadeInUp"
									data-wow-delay=".4s"
								>
									Let’s Get In Touch
								</h2>
							</div>
							<div className="contact-info-list px-15px py-20px sm:px-20px sm:py-25px lg:p-30px lg:pb-35px border-2 border-body-color dark:border-bg-color-2  transition-all duration-500 rounded-15px relative z-0 ">
								<ul className="flex flex-col ">
									<li
										className="flex items-start sm:items-center gap-25px sm:gap-30px md:gap-35px pt-15px sm:pt-20px pb-25px sm:pb-30px mb-15px sm:mb-17px border-b-2 border-body-color dark:border-bg-color-2 last:pb-0 last:mb-0 last:border-b-0 position-relative wow fadeInLeft"
										data-wow-delay=".4s"
									>
										<div className="flex-shrink-0 icon-box w-50px h-50px sm:w-60px sm:h-60px text-white-color flex justify-center items-center bg-gradient-primary-2 rounded-full aspect-square relative">
											<i className="flaticon-phone-call text-xl sm:text-size-22 absolute inset-0 flex items-center justify-center"></i>
										</div>
										<div className="text-box flex-1 min-w-0">
											<p className="text-base sm:text-lg mb-8px sm:mb-10px font-semibold text-primary-color-light dark:text-white-color ">
												Phone
											</p>
											<Link
												href="tel:+19342013452"
												className="text-primary-color-light dark:text-body-color-3 text-sm sm:text-base md:text-lg font-normal hover:text-[#16A34A] dark:hover:text-[#22C55E] break-words"
											>
												+1 9342013452
											</Link>
										</div>
									</li>
									<li
										className="flex items-start sm:items-center gap-25px sm:gap-30px md:gap-35px pb-25px sm:pb-30px mb-15px sm:mb-17px border-b-2 border-body-color dark:border-bg-color-2 last:pb-0 last:mb-0 last:border-b-0 position-relative wow fadeInLeft"
										data-wow-delay=".5s"
									>
										<div className="flex-shrink-0 icon-box w-50px h-50px sm:w-60px sm:h-60px text-white-color flex justify-center items-center bg-gradient-primary-2 rounded-full aspect-square relative">
											<i className="flaticon-mail-inbox-app text-xl sm:text-size-22 absolute inset-0 flex items-center justify-center"></i>
										</div>
										<div className="text-box flex-1 min-w-0">
											<p className="text-base sm:text-lg mb-8px sm:mb-10px font-semibold text-primary-color-light dark:text-white-color ">
												Email
											</p>
											<Link
												href="mailto:theamazonskipper@gmail.com"
												className="text-primary-color-light dark:text-body-color-3 text-sm sm:text-base md:text-lg font-normal hover:text-[#16A34A] dark:hover:text-[#22C55E] break-all sm:break-words"
											>
												theamazonskipper@gmail.com 
											</Link>
										</div>
									</li>
									<li
										className="flex items-start sm:items-center gap-25px sm:gap-30px md:gap-35px pb-25px sm:pb-30px mb-15px sm:mb-17px border-b-2 border-body-color dark:border-bg-color-2 last:pb-0 last:mb-0 last:border-b-0 position-relative wow fadeInLeft"
										data-wow-delay=".6s"
									>
										<div className="flex-shrink-0 icon-box w-50px h-50px sm:w-60px sm:h-60px text-white-color flex justify-center items-center bg-gradient-primary-2 rounded-full aspect-square relative">
											<i className="flaticon-location text-xl sm:text-size-22 absolute inset-0 flex items-center justify-center"></i>
										</div>
										<div className="text-box flex-1 min-w-0">
											<p className="text-base sm:text-lg mb-8px sm:mb-10px font-semibold text-primary-color-light dark:text-white-color ">
												Address
											</p>
											<Link
												href="https://maps.google.com/?q=Office%2013609%20182-184%20High%20Street%20North,%20East%20Ham,%20London,%20United%20Kingdom,%20E6%202JA"
												className="text-primary-color-light dark:text-body-color-3 text-sm sm:text-base md:text-lg font-normal hover:text-[#16A34A] dark:hover:text-[#22C55E] break-words"
											>
												Office 13609 182-184 High Street North, East Ham, London, United Kingdom, E6 2JA
											</Link>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="lg:col-start-7 lg:col-span-6">
							<div className="wow fadeInRight" data-wow-delay=".3s">
								<form
									id="contact-form"
									onSubmit={handleSubmit}
									className="contact px-15px py-30px md:px-5 lg:px-30px lg:py-10 xl:px-10 border-2 border-body-color dark:border-bg-color-2 rounded-15px"
									noValidate
								>
									<input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
									<input type="hidden" name="botcheck" className="hidden" />
									{/* <!-- inputs --> */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-30px gap-x-4">
										{/* <!-- first name --> */}
										<div className="sm:mb-5">
											<p className=" mb-15px font-semibold text-primary-color-light dark:text-white-color uppercase ">
												First Name*
											</p>
											<input
												name="conName"
												id="conName"
												type="text"
												placeholder="First name"
												className="text-gray-color dark:text-white-color w-full px-5 py-4 border-2 border-body-color dark:border-bg-color-2 focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-body-color dark:placeholder:text-gray-color bg-transparent leading-1"
											/>
										</div>
										{/* <!-- Last name --> */}
										<div className="sm:mb-5">
											<p className=" mb-15px font-semibold text-primary-color-light dark:text-white-color uppercase ">
												Last Name*
											</p>
											<input
												name="conLName"
												id="conLName"
												type="text"
												placeholder="Last name"
												className="text-gray-color dark:text-white-color w-full px-5 py-4 border-2 border-body-color dark:border-bg-color-2 focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-body-color dark:placeholder:text-gray-color bg-transparent leading-1"
											/>
										</div>
										{/* <!-- Email address --> */}
										<div className="sm:mb-5">
											<p className=" mb-15px font-semibold text-primary-color-light dark:text-white-color uppercase ">
												Email*
											</p>
											<input
												name="conEmail"
												id="conEmail"
												type="email"
												placeholder="Email address"
												className="text-gray-color dark:text-white-color w-full px-5 py-4 border-2 border-body-color dark:border-bg-color-2 focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-body-color dark:placeholder:text-gray-color bg-transparent leading-1"
											/>
										</div>
										{/* <!-- Phone number --> */}
										<div className="sm:mb-5">
											<p className=" mb-15px font-semibold text-primary-color-light dark:text-white-color uppercase ">
												Phone Name*
											</p>
											<input
												name="conPhone"
												id="conPhone"
												type="text"
												placeholder="Phone number"
												className="text-gray-color dark:text-white-color w-full px-5 py-4 border-2 border-body-color dark:border-bg-color-2 focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-body-color dark:placeholder:text-gray-color bg-transparent leading-1"
											/>
										</div>
										{/* <!-- ASIN / URL --> */}
										<div className="sm:col-start-1 sm:col-span-2 sm:mb-5">
											<p className=" mb-15px font-semibold text-primary-color-light dark:text-white-color uppercase ">
												Can you please share your or your competitor’s ASIN/URL?
											</p>
											<input
												name="conAsin"
												id="conAsin"
												type="text"
												placeholder="https://amazon.com/your-product..."
												className="text-gray-color dark:text-white-color w-full px-5 py-4 border-2 border-body-color dark:border-bg-color-2 focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-body-color dark:placeholder:text-gray-color bg-transparent leading-1"
											/>
										</div>
										{/* <!-- Budget --> */}
										<div className="sm:col-start-1 sm:col-span-2 sm:mb-5">
											<p className=" mb-15px font-semibold text-primary-color-light dark:text-white-color uppercase ">
												What is your budget (per month) for this project?*
											</p>
											<div className="grid gap-3">
												{[
													"$1000-$2000",
													"$2000-$4000",
													"$4000-$6000",
													"$6000-$8000",
													"Not sure",
												].map((option, index) => (
													<label
														key={option}
														className="flex items-center gap-3 rounded-lg border-2 border-body-color dark:border-bg-color-2 px-4 py-3 transition-all duration-300 hover:border-primary-color has-[input:checked]:border-[#22C55E] has-[input:checked]:bg-[#22C55E]/15"
													>
														<input
															type="radio"
															name="conBudget"
															value={option}
															required={index === 0}
															className="peer h-4 w-4 accent-[#22C55E]"
														/>
														<span className="text-gray-color dark:text-white-color text-sm md:text-base transition-colors duration-300 peer-checked:text-[#22C55E]">
															{option}
														</span>
													</label>
												))}
											</div>
										</div>

										<div className="sm:col-start-1 sm:col-span-2">
											<p className=" mb-15px font-semibold text-primary-color-light dark:text-white-color uppercase ">
												Additional comments
											</p>
											<textarea
												name="conMessage"
												id="conMessage"
												cols="1"
												rows="10"
												placeholder="Share any context or goals we should know about"
												className="text-gray-color dark:text-white-color w-full px-5 py-4 border-2 border-body-color dark:border-bg-color-2 focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-body-color dark:placeholder:text-gray-color bg-transparent leading-1"
											/>
										</div>
										<div className="sm:col-start-1 sm:col-span-2">
											<button
												type="submit"
												disabled={status.type === "loading"}
												className="text-size-15 font-bold text-white-color capitalize py-5 px-35px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full inline-flex gap-10px items-center leading-1 transition-all duration-300 group"
											>
												{status.type === "loading" ? "Sending..." : "Send Message"}
												<i className="fa-regular fa-arrow-right transition-all duration-400 -rotate-45 group-hover:rotate-0"></i>
											</button>
											{status.type === "error" && (
												<p className="mt-3 text-sm text-[#F97316]">{status.message}</p>
											)}
											{status.type === "success" && (
												<p className="mt-3 text-sm text-[#22C55E]">{status.message}</p>
											)}
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;
