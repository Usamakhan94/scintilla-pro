interface MainBanner {
  mainTitle: string;
  introPara: string;
}

interface SectionBanner {
  sectionTitle: string;
  sectionPara: string;
}

interface TabContent {
  tabHeading: string;
  tabInfo: string;
}

interface Tabs {
  tabtriggers: string[];
  tabContent: TabContent[];
}

interface ComboPackage {
  pricing: string;
  offInPercent: string;
  listing: string[];
}

interface Service {
  mainBanner: MainBanner;
  sectionBanner: SectionBanner;
  tabs: Tabs;
  portfolio: boolean;
  comboPackage: ComboPackage;
}

interface ServicesList {
  "web-development": Service[];
  "logo-design": Service[];
  ecommerce: Service[];
}

const servicesList: ServicesList = {
  "web-development": [
    {
      mainBanner: {
        mainTitle: "Customized Web Development",
        introPara:
          "Scalable, efficient, and customized web development solutions are just one tap away! Digineto is one of the leading web development companies . We offer customized web development solutions that are interactive, high-tech, and adaptive. Hire our team of experts today!",
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
};
export default servicesList;
