interface MainBanner {
  mainTitle: string;
  introPara: string;
}

interface SectionBanner {
  sectionTitle: string;
  sectionPara: string;
}

interface TabContent {
  tabHeading?: string;
  tabInfo?: string;
}

interface Tabs {
  tabtriggers?: string[];
  tabContent?: TabContent[];
}

interface ComboPackage {
  pricing?: string;
  offInPercent?: string;
  listing?: string[];
}

interface Service {
  mainBanner: MainBanner;
  sectionBanner: SectionBanner;
  tabs?: Tabs;
  portfolio: boolean;
  comboPackage?: ComboPackage;
}

interface ServicesList {
  "web-development": Service[];
  "logo-design": Service[];
  ecommerce: Service[];
  "video-animation": Service[];
  illustration: Service[];
  "nft-design": Service[];
  "marketing-collateral": Service[];
  "app-development": Service[];
  "seo-services": Service[];
  "social-media-marketing": Service[];
  "creative-copywriting": Service[];
}

const servicesList: ServicesList = {
  "web-development": [
    {
      mainBanner: {
        mainTitle: "Customized Web Development",
        introPara:
          "Scalable, efficient, and customized web development solutions are just one tap away! Scintillapro is one of the leading web development companies . We offer customized web development solutions that are interactive, high-tech, and adaptive. Hire our team of experts today!",
      },
      sectionBanner: {
        sectionTitle: "Customized Web Development Services in US",
        sectionPara:
          "Our dedicated teams of professional web designers and developers augment an innovative & conversion-driven site on WordPress. Aspire Logo holds the first spot when it comes to web development companies . We turn your visionary idea into a scalable, adaptive, and highly compatible website. Custom web development services and engaging web design can be a game-changer for your business. Therefore, reach out today and hire our team of experts. We integrate high-tech methods to make your business shine and help you achieve your goals in the most efficient way possible.",
      },
      tabs: {
        tabtriggers: [
          "Web Development",
          "WordPress",
          "eCommerce Web",
          "Corporate Website",
          "Flat Web",
          "Landing Pages",
        ],
        tabContent: [
          {
            tabHeading: "Interactive Web Development Services",
            tabInfo:
              "An engaging website does wonders since it increases USbility and end-user experience. Responsive web design and development intends to make pages render well on a wide range of gadgets and screen sizes.",
          },
          {
            tabHeading: "WordPress Custom Website Development",
            tabInfo:
              "WordPress is one of the leading CMS globally. It allows you to develop easy-to-use, engaging and highly scalable websites for your business and makes customized web development swift as well as adaptable. Hire our team of experts and allow us to build a fully customized website for you using WordPress.",
          },
          {
            tabHeading: "eCommerce Web Development",
            tabInfo:
              "We bring forward a broad spectrum of eCommerce comprehensive solutions that your website requires. Optimize the efficiency of your business & custom web development services through upscale, versatile, and user-friendly eCommerce sites.",
          },
          {
            tabHeading: "Corporate Website",
            tabInfo:
              "An effective corporate website that mirrors brand values and expertise is all that your business requires. We develop optimized tailor-made websites just for your business upon its requirements and needs. Our professional web development services can help your business shine and become more digitally present in no time.",
          },
          {
            tabHeading: "Flat Web Development, San Jose",
            tabInfo:
              "Flat websites use very minimal UI designs, are superfast and solely focus on the content. Flat websites convey brand’s message effectively and strengthen business image. To get your business’s flat website made, get in touch with our top-notch developers today.",
          },
          {
            tabHeading: "Landing Pages",
            tabInfo:
              "Landing page holds very significant value when it comes to marketing and brand image. It is also known as the main page of any website. Our top-notch developers build state-of-the-art landing pages in the most time and cost-efficient manner.",
          },
        ],
      },
      portfolio: true,
      comboPackage: {
        pricing: "999",
        offInPercent: "20",
        listing: [
          "Unlimited Custom Logo Design Concepts",
          "6 Dedicated Designers",
          "UNLIMITED Pages Website",
          "Mobile Responsive",
          "Icon Design",
          "Business Card, Letterhead, Envelope",
          "MS Word Letterhead",
          "5 Stock Photos + 3 Banner Designs",
          "Complete W3C Certified HTML",
          "Complete Deployment",
          "Complete Deployment",
          "Facebook Page Design",
          "All Final File Formats",
          "100% Satisfaction",
          "100% Ownership Rights*",
          "Money Back Guarantee",
          "Dedicated Account Manager",
        ],
      },
    },
  ],
  "logo-design": [
    {
      mainBanner: {
        mainTitle: "Artistic Logo Designs",
        introPara:
          "A customer is always introduced to the company’s logo first and foremost.A great logo speaks volumes and holds the brand’s identity strongly. Our team is here to create an outstanding logo for your brand at the most affordable prices.",
      },
      sectionBanner: {
        sectionTitle:
          "Behind Every Great Logo, There’s a Team of Great Designers",
        sectionPara:
          "As we know that log is the first presentation of your business and the first impression on the clientele. Therefore, we understand the importance of an amazing creative logo that speaks for itself. Our logo experts are always there to help you bring an astounding customized logo for your brand. Now all you need to do is stop searching for “logo designers near me” or “Globe custom logos creator” because we got your back! Our professional services logo makers will curate the best logo that will become your brand’s identity. Feel free to reach out if you have any queries and allow our experts to guide you through.",
      },
      tabs: {
        tabtriggers: [
          "Iconic logo",
          "3D Animated Logo",
          "2D Animated Logo",
          "Typographic logo",
          "Symbolic Logo",
          "Illustrative Logo",
        ],
        tabContent: [
          {
            tabHeading: "Iconic Graphic Design",
            tabInfo:
              "Minimal and extremely aesthetically pleasant type of logos. Iconic logos work for all brands and entrepreneurs. Iconic logos are easy to understand and depict business values perfectly. The right blend of design, text, and art.",
          },
          {
            tabHeading: "3D Animated Logo Designs",
            tabInfo:
              "Creative logos grab the user’s eye at the speed of light. Interesting logos tell the story, craft, and brand’s persona a lot. So to become a part of such brands you need an amazing 3D logo. Rich in colors, designs, and animations plus comes with a reasonable price tag. So what are you waiting for? Hire our experts today.",
          },
          {
            tabHeading: "2D Animated Logo Designs",
            tabInfo:
              "Creative logos grab the user’s eye at the speed of light. Appealing logos tell the story, craft, and brand’s persona a lot. So to become a part of such brands, you require a stunning 2D logo. Rich in colors, designs, and animations plus comes with a reasonable price tag. So what are you waiting for? Hire our experts today.",
          },
          {
            tabHeading: "Typographic Logo Designs",
            tabInfo:
              "Classic and typographic logo designs can never go wrong! Fun, funky, classic, professional, and so on types of fonts, great color palettes, graphical sequence, use of banners, and some text is a timeless recipe for a catchy, & classic typographic logo design.",
          },
          {
            tabHeading: "Symbolic Logo",
            tabInfo:
              "Symmetrical shapes, fine lines—forming the initials of the brand name or graphical image coherent to brand persona is something we saw a lot in recent times. Symbolic logos are very fine, clear, and present a very state-of-the-art look for the brand. A striking, clean appearance enables the logo to present something memorable and timeless.",
          },
          {
            tabHeading: "Illustrative Logo",
            tabInfo:
              "If you are searching “custom logo design company near me” or “logo design San Jose” then we got you covered. Now you can get your hands on an amazing illustrative custom logo for your brand or choose from a wide range of predefined templates. Our professional designers are available 24/7 at your service.",
          },
        ],
      },
      portfolio: true,
      comboPackage: {
        pricing: "999",
        offInPercent: "20",
        listing: [
          "Unlimited Custom Logo Design Concepts",
          "6 Dedicated Designers",
          "UNLIMITED Pages Website",
          "Mobile Responsive",
          "Icon Design",
          "Business Card, Letterhead, Envelope",
          "MS Word Letterhead",
          "5 Stock Photos + 3 Banner Designs",
          "Complete W3C Certified HTML",
          "Complete Deployment",
          "Complete Deployment",
          "Facebook Page Design",
          "All Final File Formats",
          "100% Satisfaction",
          "100% Ownership Rights*",
          "Money Back Guarantee",
          "Dedicated Account Manager",
        ],
      },
    },
  ],
  ecommerce: [
    {
      mainBanner: {
        mainTitle: "eCommerce Solution Services",
        introPara:
          "eCommerce is taking the world by storm and changing the dynamics of the digital market. We provide complete, comprehensive e-commerce business solutions that aim to take your SMEs to new heights. Safe, secure, and completely customized e-commerce marketing solutions are just a tap away!",
      },
      sectionBanner: {
        sectionTitle:
          "Hire the best eCommerce Solution Providers For Your Rapidly Growing eCommerce Business",
        sectionPara:
          "We offer a wide range of e-commerce marketing solutions for small and large enterprises, startups, and entrepreneurs. eCommerce is rapidly growing and changing the dynamics of online stores, and shopping. If you require an Interactive, feature-filled, and highly compatible and user-friendly eCommerce business solution, then our dedicated teams can take the charge. Our skilled eCommerce solution provider can turn your eCommerce idea into reality using the latest technology. Therefore, get in touch because your dream gets your idea to become a part of the fast-paced eCommerce industry.",
      },
      tabs: {
        tabtriggers: [
          "Responsive Website",
          "Wordpress Website",
          "eCommerce Web",
          "Corporate Web",
          "Flat Website",
          "Landing pages",
        ],
        tabContent: [
          {
            tabHeading: "Responsive Website",
            tabInfo:
              "Responsive websites allow you to reach your audience in a much more engaging way than regular websites. Today, most people use smartphones or tablets when browsing the web, and responsive websites can host different screen sizes.",
          },
          {
            tabHeading: "WordPress Websites",
            tabInfo:
              "While WordPress simplifies the process of building your website, it's not entirely easy, especially when it comes to the creative side of web development. We can help you design fully custom websites using WordPress, so you don't have to worry much.",
          },
          {
            tabHeading: "eCommerce Website",
            tabInfo:
              "What makes an e-commerce website more effective than it already is? Merchant integration, CMS, product reports and coupons are just some of the ways we provide comprehensive online solutions to improve your annual income.",
          },
          {
            tabHeading: "Corporate Website",
            tabInfo:
              "An effective business website increases your brand credibility and strengthens your business image. These websites are meant to provide information about their products and services so that every viewer can fully understand what they stand for.",
          },
          {
            tabHeading: "Flat Website",
            tabInfo:
              "Flat design websites implement minimalist UI designs that are effective for apps and websites. Simple but attractive flat design websites focus solely on content and nothing else. The focus on simplicity leads to a streamlined user experience.",
          },
          {
            tabHeading: "Landing Pages",
            tabInfo:
              "Landing pages are essential when marketing your products and services online through your website because they give a first impression of your work. A landing page is also known as the main page of a website",
          },
        ],
      },
      portfolio: true,
      comboPackage: {
        pricing: "999",
        offInPercent: "20",
        listing: [
          "Complete Custom Design & Development",
          "Dating Portal, Job Portal, Professional Network Portal, Social Network Portal, Restaurant Portal, Medical Portal, Enterprise Portal (Any One)",
          "Unique, User Friendly, Interactive, Dynamic, High End UI Design",
          "Unlimited Banner Designs",
          "Interactive Sliding Banners",
          "Special Hoover Effects",
          "Unlimited Stock Images",
          "5User Signup Area",
          "Client/User Dashboard Area",
          "Custom Coding and Development",
          "Content Management System (Custom)",
          "Online Appointment/Scheduling/Online Ordering Integration (Optional)",
          "Online Payment Integration (Optional)",
          "Multi Lingual (Optional)",
          "Custom Dynamic Forms (Optional)*",
          "Shopping Cart Integration (Optional)",
          "Complete Database Creation",
          "Signup Automated Email Authentication",
          "Web Traffic Analytics Integration",
          "3rd Party API Integrations",
          "Signup Area (For Newsletters, Offers etc.)",
          "Search Bar for Easy Search",
          "Live Feeds of Social Networks integration (Optional)",
          "Search Engine Submission",
          "Module-wise Architecture",
          "Extensive Admin Panel",
          "Aware Winning Team of Expert Designers and Developers",
          "Complete Deployment",
          "Complete Source Files",
          "Dedicated Project Manager",
          "*NO MONTHLY OR ANY HIDDEN FEE*",
          "100% Satisfaction",
          "100% Ownership Rights*",
          "Money Back Guarantee",
          "Dedicated Account Manager",
        ],
      },
    },
  ],
  "video-animation": [
    {
      mainBanner: {
        mainTitle: "Hire Video Animation Experts",
        introPara:
          "Right video animation can result in higher user engagement, aesthetically rich websites and greater conversion rates.We bring forth numerous options to choose from. Get an amazing customized animated video for your brand today.",
      },
      sectionBanner: {
        sectionTitle: "We are one-stop animation video company for you",
        sectionPara:
          "Our team of talented tech-geeks can help you up your website or product game through fun, creative and eye-catching animations. If you wish to learn more or get a quotation, then reach out to our 24/7 available swift customer service. We are there to help you and bring some innovation as well as a revolution in the video animation market.",
      },
      tabs: {
        tabtriggers: [
          "2D Animated Videos",
          "3D Animated Videos",
          "Whiteboard Animation",
          "Stop Motion Animation",
        ],
        tabContent: [
          {
            tabHeading: "2D Animation Services",
            tabInfo:
              "2D Animation videos make your brand and product stand out the most amongst all. It allows you to be creative at max. We are one of the leading 2D video animation agencies for a reason that is, complete client satisfaction and excellent service.",
          },
          {
            tabHeading: "3D animation services",
            tabInfo:
              "Over the past few decades, 3D animation has gained immense recognition & popularity. From rough models and textures to rendered images and videos, our team uses a combination of technologies to create stunning 3D animations for any type of brand. Hire our video animation expert and become a part of the San Jose animation club.",
          },
          {
            tabHeading: "Whiteboard Animation Services",
            tabInfo:
              "As per research, we came to the conclusion that whiteboard animation videos capture the maximum traffic and generate leads. If you are also willing to be a part of such high conversion rates websites, then hire our top-notch whiteboard video animators. We provide what your business needs and requires in the best way possible.",
          },
          {
            tabHeading: "Stop Motion Animation",
            tabInfo:
              "Stop-motion animation, with all of its quirks, is an engaging medium and part of the online world. Our team of experienced video animators has created numerous stop-motion videos with interesting concepts in the past.We also customize product animation videos and provide logo animation services upon request.",
          },
        ],
      },
      portfolio: true,
      comboPackage: {},
    },
  ],
  illustration: [
    {
      mainBanner: {
        mainTitle: "Creative and Catchy Custom Illustration Services",
        introPara:
          "We create super engaging and creative graphic design illustrations that can help you shine bright on all leading digital platforms as well as it will set your website stand out the most.",
      },
      sectionBanner: {
        sectionTitle:
          "Artistic, Moving or Original, Our Creative Illustration Design Will Speak To The World On Your Behalf.",
        sectionPara:
          "Graphic design illustration is much more than just pretty images, and striking colors. Behind every illustration there's a techie who sets up the design, maps the flow and sequences of the images, then finds the right colors so that the illustration comes out as perfect as it can ever imagine. Therefore, behind every perfect character illustration styles and designs, there's someone’s hours of hard work. Our objective is to provide quality service that matches your budget, requirements, and brand’s needs. We make sure that we come up with exciting creative work that makes you and your client happy with the end results. We create illustrations that go with your brand’s image in possibly the best way.",
      },
      tabs: {},
      portfolio: true,
      comboPackage: {},
    },
  ],
  "nft-design": [
    {
      mainBanner: {
        mainTitle:
          "Enter the World of NFTs Design & Metaverse with Logo Aspire",
        introPara:
          "NFTs & Metaverse is the future. Become a part of the exponentially growing marketplace with us today.",
      },
      sectionBanner: {
        sectionTitle: "NFTs Design & Metaverse – Taking World by Storm",
        sectionPara:
          "We live in the world of science and technology, and every sphere of our lives is getting digitized at a very fast pace. If you are still wondering, “What are NFTs?” or “What is Metaverse?” Scintillapro is here to help!  Non-Fungible Tokens aka NFTs; in simpler words, these are digital tokens that represent ownership of unique items. So basically these tokens are non-transferable, unlike other fungible assets or currencies such as bitcoins. NFTs can represent a wide assortment of digital art which has taken the world by storm. If you wish to own a custom one, then our professional NFT graphic designers can do it for you.",
      },
      tabs: {},
      portfolio: true,
      comboPackage: {},
    },
  ],
  "marketing-collateral": [
    {
      mainBanner: {
        mainTitle: "Marketing Collateral Design",
        introPara:
          "Impress your clientele through amazing and outstanding marketing collateral designs and more. We offer a large number of marketing designs, strategies, and everything that your fast-growing business needs.",
      },
      sectionBanner: {
        sectionTitle: "We offer solutions that Enable everlasting impressions",
        sectionPara:
          "Create marketing collateral for you, keeping your business requirements in measure. From designing marketing collateral to delivering what you require, we got you covered. Our high-tech teams provide all types of marketing collateral design services such as SEO, logo designs, illustrations, digital marketing, and so on. Our experts understand the industry and offer customized solutions that resonate with your brand with sheer elegance & drive better results.",
      },
      tabs: {
        tabtriggers: [
          "Stationery Design",
          "Brochure Design",
          "Poster Design",
          "Product Packing Design",
          "Book/magazine Design",
        ],
        tabContent: [
          {
            tabHeading: "Stationery Designing Marketing Collateral",
            tabInfo:
              "Business cards, letterheads, and other professional stationery templates are the essentials of any business. Allow us to create astounding stationary business supplies fully customized and one with lasting impressions.",
          },
          {
            tabHeading: "Brochure Design",
            tabInfo:
              "Creative, edgy, and professional brochure designs based on your brand’s persona that suits it the most. Our experts can help you run marketing campaigns through these unique and stunning brochures like never before. Therefore, allow us to level up the marketing collateral design dynamics in a snap!",
          },
          {
            tabHeading: "Poster Design",
            tabInfo:
              "Poster design is one of the commonly used types of marketing collateral which catches the eye quickly and promotes brand awareness during corporate events or seminars. We create amazing posters that make your brand stand out the most amongst many others. Clear goals, missions, strengthens and credibility on a poster speaking for itself.",
          },
          {
            tabHeading: "Product Packaging Design",
            tabInfo:
              "Great packaging means a great product. If you want to make your product hold the first spot and be the consumer’s favorite one, then the packing has to be remarkable. Our experts will add so much value in designing marketing collateral for your brand that will immediately catch the buyer's eye. Stronger presence of your brand is guaranteed.",
          },
          {
            tabHeading: "Book Designing Marketing Collateral",
            tabInfo:
              "Magazines and books are a necessity of every business, and coming up with one is not easy. But we are here to help you create an interesting yet creative book and magazine designs that suit your brand in the best way possible. Customization, as well as predefined template options, are always available. Get your brand’s book or magazines designed by top-notch designers today.",
          },
        ],
      },
      portfolio: true,
      comboPackage: {
        pricing: "999",
        offInPercent: "20",
        listing: [
          "Unlimited Custom Logo Design Concepts",
          "6 Dedicated Designers",
          "UNLIMITED Pages Website",
          "Mobile Responsive",
          "Icon Design",
          "Business Card, Letterhead, Envelope",
          "MS Word Letterhead",
          "5 Stock Photos + 3 Banner Designs",
          "Complete W3C Certified HTML",
          "Complete Deployment",
          "Facebook Page Design",
          "All Final File Formats",
          "100% Satisfaction",
          "100% Ownership Rights*",
          "Money Back Guarantee",
          "Dedicated Account Manager",
        ],
      },
    },
  ],
  "app-development": [
    {
      mainBanner: {
        mainTitle: "Mobile App Development, Globe",
        introPara:
          "We develop robust, comprehensive and ultra-modern mobile apps to optimize the efficiency of your brand and business.",
      },
      sectionBanner: {
        sectionTitle: "Scintillapro Top Mobile App Development Company in US",
        sectionPara:
          "To manage and streamline the complex operations of your business, you require a powerful, secure, swift, and robust mobile app. A great app can optimize the efficiency of the business exponentially and double the ROI utilized in app development. Therefore, your business needs a mobile application that we can develop and deliver. Because revolutionary products are our forte.",
      },
      tabs: {
        tabtriggers: [
          "iOS App Development",
          "Android App Development",
          "React Native App",
          "Ar/Vr App Development",
          "Customize Web App",
        ],
        tabContent: [
          {
            tabHeading: "iOS Mobile App Development Services in US",
            tabInfo:
              "We are the experts of iOS development and have been ruling the iOS development industry for a long time. It is our forte, and we strive to attain perfection. And for that very reason, our every iOS app is a masterpiece in itself. We provide mobile app development services in Globe that you can rely on.",
          },
          {
            tabHeading: "Android App Development",
            tabInfo:
              "Customized, extensible, and feature-rich android app development is one of our best solutions. Android has the maximum user-base across the globe, and in order to increase your business’s awareness, efficiency, accessibility, and clarity, your brand needs one great android app. Our professional and team of dedicated developers are always there to help you develop the app of your dreams.",
          },
          {
            tabHeading: "React Native App",
            tabInfo:
              "We develop custom reactive native apps that suit your brand and business in the most incredible way. Native apps are capable of acquiring functions of platform unique capability. Enhanced user experience and futuristic technology.",
          },
          {
            tabHeading: "Augmented & Virtual Reality App Development",
            tabInfo:
              "AR & VR is the future of tech and will take over the world in no time. Our team of experienced developers delivers incredible and engaging experiences by leveraging augmented reality and virtual reality to build next-generation apps. We can help you to be ahead of time and be a part of trend setting paradigms.",
          },
          {
            tabHeading: "Customize Web App Development Services, Globe",
            tabInfo:
              "It's time to improve the monotonous and basic websites into progressive web apps that resonate with your mobile app and brand’s persona. Our specialists who are masters in doing so will transform your website into a customizable, intelligent, and interactive web app.",
          },
        ],
      },
      portfolio: true,
      comboPackage: {},
    },
  ],
  "seo-services": [
    {
      mainBanner: {
        mainTitle: "SEO Services Rank on Top on All Major Search Engines",
        introPara:
          "Scintillapro offers state-of-the-art SEO services which are based solely on results and client satisfaction.",
      },
      sectionBanner: {
        sectionTitle: "Professional SEO Company",
        sectionPara:
          "Scintillapro is one of the leading SEO services providers , Globe and nearby areas. We have served a number of A-List clients over the past few years. Our SEO specialists make sure that our collection, agile and result-oriented approach helps your brand with increased traffic, conversions, and digital visibility on all major search engines such as google, bing, and more.",
      },
      tabs: {},
      portfolio: true,
      comboPackage: {},
    },
  ],
  "social-media-marketing": [
    {
      mainBanner: {
        mainTitle: "Social Media Marketing Service",
        introPara:
          "We are known globally for delivering leverage growth through our agile strategy and great understanding of rapidly changing algorithms.",
      },
      sectionBanner: {
        sectionTitle:
          "We create everlasting experiences for our customers in the digital world",
        sectionPara:
          "Our mantra is to provide the results you're looking for from your brands virtually. Our marketing ninja will dive deep and find the solutions that are completely customizable and do wonders for your business. Full-fledged solutions that can increase the digital presence of your brand and gain deserved spotlight.",
      },
      tabs: {
        tabtriggers: ["Customized", "Community", "Follower", "Engagement"],
        tabContent: [
          {
            tabHeading: "Customized Verification Plan",
            tabInfo:
              "We bring premium standards to the table for your brand by verifying your Facebook and Instagram accounts first. We curate collective and agile marketing campaigns, keeping the ongoing trends in measure. Not only that, but we stick to achieving your business goals and objectives real quick.",
          },
          {
            tabHeading: "Community Management",
            tabInfo:
              "Community management and delivering quality work is our top priority. The best marketing comes with an even better hold on community management strategies. We prepare tailored plans uniquely devised for your business needs and brand’s requirements. That produces results beyond your expectations. Hire our experts today.",
          },
          {
            tabHeading: "Follower Growth",
            tabInfo:
              "What's social media marketing that causes no impact on the right audiences? We strive to bring a change, revolutionize the digital marketing paradigms, and bring new approaches in the play. Follower growth is one of the key components of digital marketing, and we guarantee our customers and clients an improved and enhanced follower growth rate.",
          },
          {
            tabHeading: "Interactive Engagement",
            tabInfo:
              "Scintillapro’s marketing experts develop campaigns for your business that make a difference. Creative, fun, professional, and interesting social media copies as well as campaigns that users love and wish to see more. We can help your brand to engage more audiences on different social media platforms.",
          },
        ],
      },
      portfolio: true,
      comboPackage: {
        pricing: "999",
        offInPercent: "20",
        listing: [
          "Unlimited Custom Logo Design Concepts",
          "6 Dedicated Designers",
          "UNLIMITED Pages Website",
          "Mobile Responsive",
          "Icon Design",
          "Business Card, Letterhead, Envelope",
          "MS Word Letterhead",
          "5 Stock Photos + 3 Banner Designs",
          "Complete W3C Certified HTML",
          "Complete Deployment",
          "Facebook Page Design",
          "All Final File Formats",
          "Dedicated Account Manager",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Money Back Guarantee",
        ],
      },
    },
  ],
  "creative-copywriting": [
    {
      mainBanner: {
        mainTitle: "Professional and highly creative copywriting services",
        introPara:
          "Our experts write copies that leave an everlasting impression on your audiences. Clear, crisp and captivating copies that do wonders for your brand.",
      },
      sectionBanner: {
        sectionTitle:
          "Clear, Connecting & Captivating SEO Copywriting Services",
        sectionPara:
          "Scintillapro offers professional copywriting services to businesses, eCommerce, agencies and startups. Our experts develop content that is optimized, plagiarism-free and highly creative yet professional. Our objective is to write copies that enhance your brand's digital presence, improves organic traffic, and promotes more leads. We also deal in website copywriting services, SEO copywriting services, blogs, articles, and everything you want us to write for your brand.",
      },
      tabs: {
        tabtriggers: [
          "Article Writing Services",
          "Blog Writing",
          "Press Release",
          "Website Content",
          "Product Description",
        ],
        tabContent: [
          {
            tabHeading: "Article Writing Services",
            tabInfo:
              "We understand that article writing is not a piece of pie and for that reason our professional native English writers are here to rescue you. Digineto masters in article writing because of our dedicated teams of experienced, skilled, and intelligent writers. Let our writing do the talking for your business.",
          },
          {
            tabHeading: "Blog Writing Services",
            tabInfo:
              "Scintillapro brings forward blog writing services for its clients and customers at great prices. Blogging is one of the most preferred way to drive traffic, serves as catalyst for marketing via email and so much more.Our experts create amazing blog content that will make your clientele or target audience fall in love with your brand.",
          },
          {
            tabHeading: "Press Release",
            tabInfo:
              "Press release is a type of writing that is powerful, and captivating. Our professional writers and authors are skilled and understand the psyche. We have decades of experience in advertising content and copywriting for various businesses across many platforms.",
          },
          {
            tabHeading: "Website Copywriting Services",
            tabInfo:
              "Quality web content material delivers value to traffic and enables increased website sales and conversions, drives traffic, improves web content sharing, and increases the degree of engagement of your customers.",
          },
          {
            tabHeading: "Product Description",
            tabInfo:
              "Scintillapro presents product description writing services to its honorable clientele. Our professional writers will make certain to provide the most attractive product description with clean specifications and specific characteristics of your services and products. Our objective is to provide everything you anticipate.",
          },
        ],
      },
      portfolio: true,
      comboPackage: {},
    },
  ],
};
export default servicesList;
