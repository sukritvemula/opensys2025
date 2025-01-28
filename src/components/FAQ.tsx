import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is OpenSys?",
      answer: "OpenSys is CBIT's premier open-source technology symposium bringing together students, developers, and tech enthusiasts for learning, networking, and innovation."
    },
    {
      question: "When and where is it happening?",
      answer: "OpenSys 2025 will take place on February 26th and 27th, 2025, at Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad."
    },
    {
      question: "How can I register for the events?",
      answer: "You can register through our online registration forms available on each event card. Registration is completely free for all events."
    },
    {
      question: "Do I need any prior experience?",
      answer: "No prior experience is required! Our events are designed for all skill levels, from beginners to advanced participants."
    },
    {
      question: "Can I participate in multiple events?",
      answer: "Yes! You can participate in all events as long as there are no schedule conflicts."
    },
    {
      question: "What should I bring to the events?",
      answer: "Bring your student ID card, and enthusiasm! Additional requirements specific to each event will be shared after registration."
    },
    {
      question: "Is there a team size requirement?",
      answer: "Git Cryptex and Decipher require teams of 2 members. Odyssey is an individual event."
    },
    {
      question: "Will certificates be provided?",
      answer: "Yes, all participants will receive digital certificates of participation. Winners will receive special recognition certificates."
    },
    {
      question: "Is there a dress code?",
      answer: "While there's no strict dress code, we recommend smart casual attire suitable for a college tech event."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-warmWhite">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-navy hover:text-coral">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-softBlack/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
