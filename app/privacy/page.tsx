import Transition from "@/components/ui/text-appear"

const page = () => {
  return (
    <section className="mt-36">
      <div className="container">
        <h4 className="sm:text-h4 text-3xl text-center font-semibold mb-8">
          <Transition>
            {`Privacy Policy`}
          </Transition>
        </h4>
        <h4 className="sm:text-h4 text-3xl text-center font-semibold">
          <Transition>
            {`Personal Information`}
          </Transition>
        </h4>
        <Transition>
          <p className="text-sm text-toned-gray max-w-[53.75rem] text-center mx-auto mb-10">
            {`When you interact with us, we automatically receive and store certain types of information, such as the content you view, the date and time that you view this content, the products you purchase, or your location information associated with your IP address. We use the information we collect to serve you more relevant advertisements (referred to as "Retargeting"). This is statistical information used to monitor the USge of our website and for advertising purposes. This information does not include personal information. a) Personally Identifiable Information: Scintillapro Consulting will not rent or sell your personally identifiable information to others. We may store personal information in locations outside the direct control of Scintillapro Consulting (for instance on servers or databases co-located with hosting providers). Any personally identifiable information you elect to make publicly available on our sites, such as posting comments on our blog page, will be available to others. If you remove information that you have made public on our site, copies may remain viewable in cached and archived pages of our site, or if other users have copied or saved that information. Our blog is managed by a third party application that may require you to register to post a comment. We do not have access or control of the information posted on the blog. You will need to contact or login into the third party application if you want the personal information that was posted to the comments section removed. To learn how the third party application uses your information, please visit their privacy policy. All personal information used within our contact form will be used by the internal team at Scintillapro for communication purposes. b) Non-Personally Identifiable Information: Non-Personally Identifiable Information: We may share non-personally identifiable information (such as anonymous USge data, referring/exit pages and URLs, platform types, number of clicks, etc,) with interested third parties to help them understand the USge patterns for certain Scintillapro Consulting services.`}
          </p>
        </Transition>
        <h4 className="sm:text-h4 text-3xl text-center font-semibold">
          <Transition>
            {`Cookies`}
          </Transition>
        </h4>
        <Transition>
          <p className="text-sm text-toned-gray max-w-[53.75rem] text-center mx-auto mb-10">
            {`As you browse Scintillapro, advertising cookies will be placed on your computer so that we can understand what you are interested in. Our display advertising partner, then enables us to present you with retargeting advertising on other sites based on your previous interaction with Scintillapro. The techniques our partners employ do not collect personal information such as your name, email address, postal address or telephone number. You can visit this page to opt out of Ad Roll and their partners’ targeted advertising.`}
          </p>
        </Transition>
        <h4 className="sm:text-h4 text-3xl text-center font-semibold">
          <Transition>
            {`Security`}
          </Transition>
        </h4>
        <Transition>
          <p className="text-sm text-toned-gray max-w-[53.75rem] text-center mx-auto mb-10">
            {`We implement a secure processing server on our site when collecting information to ensure a high level of security for your personal information entered such as bank details and credit card information. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.`}
          </p>
        </Transition>
      </div>
    </section>
  )
}

export default page
