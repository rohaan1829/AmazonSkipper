"use client";

import Link from "next/link";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "Your privacy matters to us. This Privacy Policy describes how we collect, use, and protect information when you visit our website or use our services. By accessing or interacting with our site, you consent to the practices described below. This policy applies only to information collected through our website and does not extend to any third-party sites or services.",
    ],
  },
  {
    id: "info-we-collect",
    title: "Information We Collect",
    subsections: [
      {
        subtitle: "Personal information",
        paragraphs: [
          "We may collect personal information that can identify you, such as your name, email address, mailing address, and telephone number when you register on our site, place an order, subscribe to a newsletter, fill out a form, or engage with other features on our site. We collect this information only when you voluntarily provide it and you can always refuse to supply personal details, although doing so may limit your ability to use certain features.",
        ],
      },
      {
        subtitle: "Non-personal information",
        paragraphs: [
          "Like many website operators, we also collect non-personal information that web browsers and servers typically make available, such as browser type, device type, language preference, referring site, date and time of visitor requests, and other technical details. This information helps us understand how visitors use our site and is compiled in aggregate reports.",
          "We may use analytic tools and cookies to gather statistical information and enhance user experience; you can refuse cookies via your browser settings, but some features may not function properly.",
        ],
      },
      {
        subtitle: "Information gathered for interactions",
        paragraphs: [
          "When you interact with us through forms or blogs, we may ask for additional details (for example, a username and email when signing up for a blog). For transactions, we may collect necessary financial information to process payments, but we collect only what is needed to fulfil your request.",
        ],
      },
    ],
  },
  {
    id: "usage",
    title: "How We Use Information",
    list: [
      "Provide and improve services: To deliver the products or services you request, respond to customer service inquiries, and improve our site and offering.",
      "Communications: To send occasional emails with updates, marketing information, or service notices if you opt in; you may unsubscribe at any time.",
      "Processing transactions: To process payments and complete orders; we share only the necessary information with payment processors.",
      "Analytics and marketing: To analyze how users interact with our site and deliver relevant advertising (including remarketing); third-party partners may set cookies to display targeted ads.",
      "Legal obligations: To comply with legal requirements or enforce our terms and protect the rights, property, or safety of our company and users.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    paragraphs: [
      "We do not sell, trade, or rent personal information to others. We may share information with trusted third parties that assist us in operating our website, conducting our business, or providing services to you, provided they agree to keep this information confidential and use it only for specified purposes.",
      "We may also disclose information when required by law, court order, or to protect our rights or the rights of others. In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of that transaction.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Tracking Technologies",
    paragraphs: [
      "Our website uses cookies and similar technologies to recognize your browser, store preferences, and tailor content and advertising. Cookies may also be used by third-party services, such as analytics providers and advertising partners, to collect information about your browsing activities over time and across different websites.",
      "You can set your browser to refuse cookies or to alert you when cookies are being sent; however, some parts of the site may not function properly without them.",
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    paragraphs: [
      "We retain personal information only as long as necessary to fulfil the purposes outlined in this policy and to comply with legal, tax, or regulatory requirements. When data is no longer needed, we securely delete or anonymize it. We do not keep data longer than necessary.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We adopt appropriate data collection, storage, and processing practices to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. This includes using SSL to encrypt data transmitted between your device and our site and implementing other commercially acceptable safeguards.",
      "Nonetheless, no method of transmission over the Internet or electronic storage is completely secure; therefore, we cannot guarantee absolute security.",
    ],
  },
  {
    id: "rights",
    title: "Your Rights and Choices",
    paragraphs: [
      "You have the right to access, correct, or delete your personal information and to withdraw consent for marketing communications. You may also object to or restrict certain processing activities. To exercise these rights, please contact us using the details below.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    paragraphs: [
      "Our site may contain links to external websites that are not operated by us. We encourage you to review the privacy policies of any third-party sites you visit, as we have no control over and assume no responsibility for their content, privacy practices, or services.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the “Last Updated” date will be revised accordingly. Your continued use of the site after any changes indicates your acceptance of the updated policy. We encourage you to review this page regularly for the latest information on our privacy practices.",
    ],
  },
];

const contactDetails = [
  { label: "Email", value: "muhammad.huzaifa@amazonskipperteam.com", href: "mailto:muhammad.huzaifa@amazonskipperteam.com" },
  {
    label: "Address",
    value: [
      "Office 13609, 182-184 High Street North, East Ham, London, United Kingdom",
      "Office #26, Kohinoor Plaza 1, Jaranwala Road, Faisalabad, Pakistan",
    ],
  },
  { label: "Phone (US)", value: "+1 934 201 3452", href: "tel:+19342013452" },
  { label: "Phone (PK)", value: "+92 332 6322 643", href: "tel:+923326322643" },
];

const PrivacyPolicyMain = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <div className="absolute inset-0 opacity-35">
          <div className="absolute -top-24 left-[15%] h-80 w-80 rounded-full bg-[#22C55E]/40 blur-[120px]"></div>
          <div className="absolute top-[35%] right-[18%] h-[320px] w-[320px] rounded-full bg-[#0EA5E9]/25 blur-[140px]"></div>
          <div className="absolute bottom-[-15%] left-[28%] h-72 w-72 rounded-full bg-[#16A34A]/30 blur-[110px]"></div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Privacy Policy
          </span>
          <h1 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-[58px]">
            We safeguard your data so you can scale with confidence
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Transparency matters. Below you’ll find exactly how we collect, use, and protect your information when you work with Amazon
            Skipper.
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/50">Last Updated: October 11, 2025</p>
        </div>
      </section>

      <section className="relative px-6 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
          <aside className="lg:w-64">
            <div className="sticky top-28 hidden lg:block">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">On This Page</h2>
                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  {sections.map(section => (
                    <li key={section.id}>
                      <Link href={`#${section.id}`} className="transition hover:text-white">
                        {section.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="#contact" className="transition hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="flex-1 space-y-16">
            {sections.map(section => (
              <article key={section.id} id={section.id} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">{section.title}</h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-white/70">
                  {section.paragraphs?.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}

                  {section.subsections?.map(sub => (
                    <div key={sub.subtitle} className="space-y-3">
                      <h3 className="text-lg font-semibold text-white">{sub.subtitle}</h3>
                      {sub.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  ))}

                  {section.list && (
                    <ul className="mt-3 space-y-3 text-white/80">
                      {section.list.map(item => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#22C55E]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}

            <article id="contact" className="rounded-3xl border border-[#4CAF50]/30 bg-gradient-to-br from-black via-[#101828] to-[#0f2b1d] p-8">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Contact Us</h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                If you have any questions about this Privacy Policy or the way we handle your data, please reach out using the details below.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {contactDetails.map(({ label, value, href }) => (
                  <div key={label} className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#22C55E]">{label}</p>
                    {Array.isArray(value) ? (
                      <div className="space-y-1 text-sm text-white/80">
                        {value.map(line => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    ) : href ? (
                      <Link href={href} className="text-sm text-white transition hover:text-[#22C55E]">
                        {value}
                      </Link>
                    ) : (
                      <p className="text-sm text-white/80">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyMain;

