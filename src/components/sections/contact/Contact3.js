"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const initialForm = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	asin: "",
	budget: "",
	message: "",
};

const Contact3 = () => {
	const [form, setForm] = useState(initialForm);
	const [status, setStatus] = useState({ type: "idle", message: "" });

	const budgetOptions = useMemo(
		() => ["$1000-$2000", "$2000-$4000", "$4000-$6000", "$6000-$8000", "Not sure"],
		[]
	);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setStatus({ type: "loading", message: "" });

		const payload = {
			firstName: form.firstName.trim(),
			lastName: form.lastName.trim(),
			email: form.email.trim(),
			phone: form.phone.trim(),
			asin: form.asin.trim(),
			budget: form.budget,
			message: form.message.trim(),
		};

		if (!payload.firstName || !payload.lastName || !payload.email || !payload.phone) {
			setStatus({ type: "error", message: "Please fill in the required fields." });
			return;
		}

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				throw new Error("Request failed");
			}

			setForm(initialForm);
			setStatus({ type: "success", message: "Thanks! We’ll be in touch shortly." });
		} catch (error) {
			console.error("Contact form error:", error);
			setStatus({
				type: "error",
				message: "Something went wrong. Please try again or email us directly.",
			});
		}
	};

	return (
		<section id="contact">
			<div className=" dark:bg-black-color py-60px md:py-20 lg:py-100px xl:py-30">
				<div className="container">
					<div className="grid lg:grid-cols-12 gap-30px">
						{/* <!-- experience single area --> */}
						<div className="lg:col-start-1 lg:col-span-5 xl:col-span-4">
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
							<div className="contact-info-list px-15px py-30px lg:p-30px lg:pb-35px border-2 border-body-color dark:border-bg-color-2  transition-all duration-500 rounded-15px relative z-0 ">
								<ul className="flex flex-col ">
									<li
										className="flex  items-center gap-15px pb-30px mb-17px border-b-2 border-body-color dark:border-bg-color-2 last:pb-0 last:mb-0 last:border-b-0 position-relative wow fadeInLeft"
										data-wow-delay=".4s"
									>
										<div className="flex-shrink-0 icon-box text-xl sm:text-size-22 w-50px h-50px sm:w-60px sm:h-60px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
											<i className="flaticon-phone-call leading-1 mt-1"></i>
										</div>
										<div className="text-box">
											<p className="text-lg mb-10px font-semibold text-primary-color-light dark:text-white-color ">
												Phone
											</p>
											<Link
												href="tel:+19342013452"
												className="text-primary-color-light dark:text-body-color-3 text-lg  font-normal hover:text-[#16A34A] dark:hover:text-[#22C55E]"
											>
												+1 9342013452
											</Link>
										</div>
									</li>
									<li
										className="flex  items-center gap-15px pb-30px mb-17px border-b-2 border-body-color dark:border-bg-color-2 last:pb-0 last:mb-0 last:border-b-0 position-relative wow fadeInLeft"
										data-wow-delay=".5s"
									>
										<div className="flex-shrink-0 icon-box text-xl sm:text-size-22 w-50px h-50px sm:w-60px sm:h-60px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
											<i className="flaticon-mail-inbox-app leading-1 mt-1"></i>
										</div>
										<div className="text-box">
											<p className="text-lg mb-10px font-semibold text-primary-color-light dark:text-white-color ">
												Email
											</p>
											<Link
												href="mailto:roaan.dev@gmail.com"
												className="text-primary-color-light dark:text-body-color-3 text-lg font-normal hover:text-[#16A34A] dark:hover:text-[#22C55E] break-all"
											>
												muhammad.huzaifa@amazonskipperteam.com
											</Link>
										</div>
									</li>
									<li
										className="flex  items-center gap-15px pb-30px mb-17px border-b-2 border-body-color dark:border-bg-color-2 last:pb-0 last:mb-0 last:border-b-0 position-relative wow fadeInLeft"
										data-wow-delay=".6s"
									>
										<div className="flex-shrink-0 icon-box text-xl sm:text-size-22 w-50px h-50px sm:w-60px sm:h-60px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
											<i className="flaticon-location leading-1 mt-1"></i>
										</div>
										<div className="text-box">
											<p className="text-lg mb-10px font-semibold text-primary-color-light dark:text-white-color ">
												Address
											</p>
											<Link
												href="https://maps.google.com/?q=Office%2013609%20182-184%20High%20Street%20North,%20East%20Ham,%20London,%20United%20Kingdom,%20E6%202JA"
												className="text-primary-color-light dark:text-body-color-3 text-lg  font-normal hover:text-[#16A34A] dark:hover:text-[#22C55E]"
											>
												Office 13609 182-184 High Street North, East Ham, London, United Kingdom, E6 2JA
											</Link>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className=" lg:col-start-6  lg:col-span-7">
							<div className="wow fadeInRight" data-wow-delay=".3s">
								<form
									id="contact-form"
									onSubmit={handleSubmit}
									className="contact px-15px py-30px md:px-5 lg:px-30px lg:py-10 xl:px-10 border-2 border-body-color dark:border-bg-color-2 rounded-15px"
								>
									{/* <!-- inputs --> */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-30px gap-x-4">
										{/* <!-- first name --> */}
										<div className="sm:mb-5">
											<p className=" mb-15px font-semibold text-primary-color-light dark:text-white-color uppercase ">
												First Name*
											</p>
											<input
												name="firstName"
												id="conName"
												value={form.firstName}
												onChange={handleChange}
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
												name="lastName"
												id="conLName"
												value={form.lastName}
												onChange={handleChange}
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
												name="email"
												id="conEmail"
												value={form.email}
												onChange={handleChange}
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
												name="phone"
												id="conPhone"
												value={form.phone}
												onChange={handleChange}
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
												name="asin"
												id="conAsin"
												value={form.asin}
												onChange={handleChange}
												type="text"
												placeholder="https://amazon.com/your-product..."
												className="text-gray-color dark:text-white-color w-full px-5 py-4 border-2 border-body-color dark:border-bg-color-2 focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-body-color dark:placeholder:text-gray-color bg-transparent leading-1"
											/>
										</div>
										{/* <!-- Budget --> */}
										<div className="sm:col-start-1 sm:col-span-2 sm:mb-5">
											<p className=" mb-15px font-semibold text-primary-color-light dark:text-white-color uppercase ">
												What is your budget (per month) for this project?
											</p>
											<div className="grid gap-3">
												{budgetOptions.map((option) => (
													<label
														key={option}
														className="flex items-center gap-3 rounded-lg border-2 border-body-color dark:border-bg-color-2 px-4 py-3 transition-all duration-300 hover:border-primary-color has-[input:checked]:border-[#22C55E] has-[input:checked]:bg-[#22C55E]/15"
													>
														<input
															type="radio"
															name="budget"
															value={option}
															checked={form.budget === option}
															onChange={handleChange}
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
												name="message"
												id="conMessage"
												value={form.message}
												onChange={handleChange}
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
