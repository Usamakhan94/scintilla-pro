import Transition from "@/components/ui/text-appear"

const page = () => {
  return (
    <section className="mt-48">
      <div className="container">
        <h3 className="sm:text-h3 text-3xl text-left font-semibold mb-8">
          <Transition>
            {`Welcome to Digineto Customer Support`}
          </Transition>
        </h3>
        <h4 className="sm:text-h4 text-3xl text-left font-semibold my-4">
          <Transition>
            {`Our Commitment to Your Satisfaction`}
          </Transition>
        </h4>
        <Transition>
          <p className="text-sm text-toned-gray text-left ">
            {`At Digineto, we are dedicated to ensuring your satisfaction with our services. Our customer support team is here to assist you promptly, providing the support you need to make the most out of your experience.`}
          </p>
        </Transition>
        <h3 className="sm:text-h3 text-3xl text-left font-semibold my-4">
          <Transition>
            {`How to Reach Us`}
          </Transition>
        </h3>
        <h4 className="sm:text-h4 text-3xl text-left font-semibold my-4">
          <Transition>
            {`1. Live Chat Support`}
          </Transition>
        </h4>
        <Transition>
          <p className="text-sm text-toned-gray text-left">
            {` Experience real-time assistance through our live chat feature. Our support representatives are available to chat with you, addressing any questions or concerns you may have. Click the "Access Live Chat" button to connect instantly.`}
          </p>
        </Transition>
        <h4 className="sm:text-h4 text-3xl text-left font-semibold my-4">
          <Transition>
            {`2. Phone Support`}
          </Transition>
        </h4>
        <Transition>
          <p className="text-sm text-toned-gray text-left ">
            {` For those who prefer direct communication, our phone support is just a call away. Dial [Your Contact Number] during business hours to speak with our friendly support team. We're here to provide the personalized assistance you deserve.`}
          </p>
        </Transition>

        <h3 className="sm:text-h3 text-3xl text-left font-semibold my-4">
          <Transition>
            {`Technical Assistance`}
          </Transition>
        </h3>
        <h4 className="sm:text-h4 text-3xl text-left font-semibold my-4">
          <Transition>
            {`3. Technical Support`}
          </Transition>
        </h4>
        <Transition>
          <p className="text-sm text-toned-gray text-left">
            {` Encountering technical challenges? Submit a support ticket, and our expert technical team will promptly address and resolve your issues. Your technical concerns are our priority, and we are committed to ensuring a smooth experience for you.`}
          </p>
        </Transition>
        <h4 className="sm:text-h4 text-3xl text-left font-semibold my-4">
          <Transition>
            {`4. Knowledge Base`}
          </Transition>
        </h4>
        <Transition>
          <p className="text-sm text-toned-gray text-left">
            {`Empower yourself with our comprehensive knowledge base. Explore detailed guides and resources that cover various aspects of our services. The knowledge base is designed to assist you in navigating our offerings with ease.`}
          </p>
        </Transition>

        <h3 className="sm:text-h3 text-3xl text-left font-semibold my-4">
          <Transition>
            {`Share Your Experience`}
          </Transition>
        </h3>
        <h4 className="sm:text-h4 text-3xl text-left font-semibold my-4">
          <Transition>
            {`5. Feedback and Suggestions`}
          </Transition>
        </h4>
        <Transition>
          <p className="text-sm text-toned-gray text-left">
            {` Your feedback is invaluable to us. Share your thoughts and suggestions to help us continuously improve our services. Your insights play a crucial role in enhancing your experience and the experiences of our entire community.`}
          </p>
        </Transition>


        <h3 className="sm:text-h3 text-3xl text-left font-semibold my-4">
          <Transition>
            {`Stay Connected`}
          </Transition>
        </h3>
        <h4 className="sm:text-h4 text-3xl text-left font-semibold my-4">
          <Transition>
            {`6. Social Media Channels`}
          </Transition>
        </h4>
        <Transition>
          <p className="text-sm text-toned-gray text-left mb-20">
            {`Connect with us on [Facebook, Twitter, LinkedIn, etc.] to stay updated on the latest news, announcements, and engage in meaningful discussions. Join our online community for insights, tips, and a sense of belonging.`}
          </p>
        </Transition>
      </div>
    </section>
  )
}

export default page
