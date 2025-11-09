"use client";

import Link from "next/link";

const refundSections = [
  {
    id: "refund-introduction",
    title: "Introduction",
    paragraphs: [
      "We strive to provide high-quality services and products. If you are not completely satisfied with your purchase or service, this Refund Policy explains when we offer refunds and the steps to request one. Please review this policy carefully before making a purchase.",
    ],
  },
  {
    id: "refund-services-covered",
    title: "Services Covered",
    paragraphs: [
      "This refund policy covers fees paid for marketing, advertising, account management, or other professional services provided through our website. Digital products and informational resources (such as downloadable guides or courses) may have separate refund terms, which will be stated at the point of purchase.",
    ],
  },
  {
    id: "refund-eligibility",
    title: "Eligibility for Refunds",
    subsections: [
      {
        subtitle: "Service fees",
        paragraphs: [
          "If you purchase a one-time service and are unsatisfied with the initial deliverable, you may request a refund within 14 days of receiving the deliverable. To be eligible, you must provide a clear reason for your dissatisfaction and evidence that the service failed to meet the agreed-upon scope. Work already performed prior to cancellation may be deducted from the refund amount.",
        ],
      },
      {
        subtitle: "Recurring services",
        paragraphs: [
          "For monthly management or subscription services, you may request a refund of the most recent month’s fee if you notify us within 5 business days of the billing date and can show that we did not provide the agreed-upon services during that billing cycle. Previous months’ fees are non-refundable.",
        ],
      },
      {
        subtitle: "Non-refundable items",
        paragraphs: [
          "Setup fees, consulting sessions that have already occurred, completed campaign work, and any third-party costs (such as advertising spend) are non-refundable. Custom projects and digital downloads are generally non-refundable once delivery has begun or the file has been accessed.",
        ],
      },
    ],
  },
  {
    id: "refund-request",
    title: "How to Request a Refund",
    paragraphs: [
      "Contact us at muhammad.huzaifa@amazonskipperteam.com with your order or invoice number, the service or product purchased, and a detailed explanation of the issue.",
      "We will acknowledge receipt of your request within 3 business days and may ask for additional information or clarification.",
      "Once your request is reviewed, we will notify you of approval or rejection within 10 business days. Approved refunds will be issued to your original payment method. Depending on your payment provider, it may take several additional business days for the refund to appear in your account.",
    ],
  },
  {
    id: "refund-late",
    title: "Late or Missing Refunds",
    list: [
      "Check your bank or credit card account again.",
      "Contact your credit card company; it may take some time before your refund is officially posted.",
      "Contact your bank. There is often processing time before a refund is posted.",
      "If you’ve done all of this and still have not received your refund, please email us at support@example.com.",
    ],
  },
  {
    id: "refund-changes",
    title: "Changes to This Refund Policy",
    paragraphs: [
      "We may revise this policy occasionally to reflect changes in our services or applicable laws. When we do, we will update the policy on our website and adjust the “Last Updated” date. Continued use of our services after any changes constitutes acceptance of the revised policy.",
    ],
  },
  {
    id: "refund-contact",
    title: "Contact",
    paragraphs: [
      "For questions or concerns regarding refunds, please contact us at muhammad.huzaifa@amazonskipperteam.com or use the contact information listed on our website.",
    ],
  },
];

const cancellationSections = [
  {
    id: "cancel-introduction",
    title: "Introduction",
    paragraphs: [
      "We understand that plans change. This Cancellation Policy explains how you can cancel services or appointments and what happens when you do. By booking or subscribing to our services, you agree to abide by this policy.",
    ],
  },
  {
    id: "cancel-one-time",
    title: "Cancelling One-Time Services",
    paragraphs: [
      "Notice period: You may cancel a scheduled project or consultation up to 48 hours before the agreed start time without penalty. Cancellations made within 48 hours may incur a cancellation fee equal to 25% of the project cost to compensate for time reserved and preparatory work.",
      "After work has begun: Once we have started work on your project, you may still request cancellation; however, you will be responsible for payment of all work completed up to the date of cancellation. Any deliverables produced to that point will be provided to you upon payment of the outstanding balance.",
    ],
  },
  {
    id: "cancel-recurring",
    title: "Cancelling Recurring Services",
    paragraphs: [
      "Monthly subscriptions: You may cancel at any time with 30 days’ notice before the next billing cycle. To cancel, send written notice to support@example.com. Fees already billed or incurred for the current cycle are non-refundable, but we will not bill further once the notice period ends.",
      "Upgrades or downgrades: Requests to upgrade or downgrade your service tier will take effect at the start of the next billing cycle unless otherwise agreed.",
    ],
  },
  {
    id: "cancel-nonpayment",
    title: "Failure to Pay",
    paragraphs: [
      "If payment for recurring services is not received within 7 days of the due date, we reserve the right to suspend or cancel services until payment is received. Continued non-payment may lead to termination of the agreement and referral to collections.",
    ],
  },
  {
    id: "cancel-appointments",
    title: "Changes to Scheduled Appointments",
    paragraphs: [
      "If you need to reschedule a consultation or meeting, please notify us at least 24 hours in advance. We will make reasonable efforts to accommodate your request. Rescheduling within less than 24 hours may be treated as a cancellation and may incur the applicable fee.",
    ],
  },
  {
    id: "cancel-policy-changes",
    title: "Changes to This Cancellation Policy",
    paragraphs: [
      "We may update this policy from time to time. Updated versions will be posted on our website and will indicate the effective date. Continued use of our services after a policy change means you accept the revised terms.",
    ],
  },
  {
    id: "cancel-contact",
    title: "Contact",
    paragraphs: [
      "If you have questions about cancelling services or appointments, please contact us at muhammad.huzaifa@amazonskipperteam.com or through our contact form.",
    ],
  },
];

const RefundCancellationMain = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <div className="absolute inset-0 opacity-35">
          <div className="absolute -top-24 left-[18%] h-80 w-80 rounded-full bg-[#22C55E]/40 blur-[120px]"></div>
          <div className="absolute top-[38%] right-[20%] h-[320px] w-[320px] rounded-full bg-[#0EA5E9]/20 blur-[140px]"></div>
          <div className="absolute bottom-[-18%] left-[30%] h-72 w-72 rounded-full bg-[#16A34A]/25 blur-[110px]"></div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Refund & Cancellation
          </span>
          <h1 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-[58px]">
            Clear refund and cancellation policies, built around your confidence
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Here’s how we handle refunds, cancellations, and scheduling adjustments when you partner with Amazon Skipper.
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/50">Last Updated: October 11, 2025</p>
        </div>
      </section>

      <section className="relative px-6 pb-24 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
          <aside className="lg:w-64">
            <div className="sticky top-28 hidden lg:block">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Quick Links</h2>
                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  <li>
                    <Link href="#refund-policy" className="transition hover:text-white">
                      Refund Policy
                    </Link>
                  </li>
                  {refundSections.map(section => (
                    <li key={section.id}>
                      <Link href={`#${section.id}`} className="pl-4 text-white/60 transition hover:text-white">
                        {section.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="#cancellation-policy" className="transition hover:text-white">
                      Cancellation Policy
                    </Link>
                  </li>
                  {cancellationSections.map(section => (
                    <li key={section.id}>
                      <Link href={`#${section.id}`} className="pl-4 text-white/60 transition hover:text-white">
                        {section.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="flex-1 space-y-16">
            <article id="refund-policy" className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h2 className="text-3xl font-bold text-white">Refund Policy</h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Explore how refunds work for Amazon Skipper services, including eligibility requirements, timelines, and how to submit a
                request.
              </p>
            </article>

            {refundSections.map(section => (
              <article key={section.id} id={section.id} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-white/70">
                  {section.paragraphs?.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                  {section.subsections?.map(sub => (
                    <div key={sub.subtitle} className="space-y-3">
                      <h4 className="text-lg font-semibold text-white">{sub.subtitle}</h4>
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

            <article id="cancellation-policy" className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h2 className="text-3xl font-bold text-white">Cancellation Policy</h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Understand your options for cancelling projects, subscriptions, or appointments—and what happens when plans change.
              </p>
            </article>

            {cancellationSections.map(section => (
              <article key={section.id} id={section.id} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-white/70">
                  {section.paragraphs?.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}

            <article className="rounded-3xl border border-[#4CAF50]/30 bg-gradient-to-br from-black via-[#101828] to-[#0f2b1d] p-8">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Need help with next steps?</h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                If you have any questions about our refund or cancellation policies, our team is ready to help you navigate the process.
                Reach out at{" "}
                <Link
                  href="mailto:muhammad.huzaifa@amazonskipperteam.com"
                  className="font-semibold text-[#22C55E] transition hover:text-white"
                >
                  muhammad.huzaifa@amazonskipperteam.com
                </Link>{" "}
                or give us a call.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RefundCancellationMain;

