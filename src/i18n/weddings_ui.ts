export const languages: Record<'en', { name: string; flag: string }> = {
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'en';

export type LanguageCode = keyof typeof languages;

export const ui = {
  en: {
    projectsContent: {
      GloriaHao: {
        title: "Gloria and Hao's Engagement",
        description: "Gloria and Hao is getting engaged!",
        imageAltText: 'Placeholder image for the sample project',
        categoryText: 'Engagement',
        dateText: '2022-09-12',
        detailedDescription:
          'Gloria and Hao is getting engaged! Woohoo!',
        keyFeatures: {
          // responsiveDesign: {
          //   title: '',
          //   description: '',
          // },
          // contentManagement: {
          //   title: '',
          //   description:
          //     '',
          // },
        },
        galleryImages: {
          sampleGalleryImage1: { // If you enable gallery for the example
            alt: 'Alt text for gallery image 1',
            caption: 'Caption for gallery image 1',
          },
        },
        challenges:
          '',
        learnings: '',
      },
      EugeneFlo: {
        title: "Eugene and Flo's Wedding",
        description: 'Eugene and Flo is getting married!',
        imageAltText: 'Placeholder image for the sample project',
        categoryText: 'Courthouse Wedding',
        dateText: '2022-08-05',
        detailedDescription:
          'Eugene and Flo is getting married! Woohoo!',
        keyFeatures: {
          // responsiveDesign: {
          //   title: '',
          //   description: '',
          // },
          // contentManagement: {
          //   title: '',
          //   description:
          //     '',
          // },
        },
      },
      TylerJiayi: {
        title: "Tyler and Jiayi's Wedding",
        description: 'LOL!',
        imageAltText: 'Placeholder image for the sample project',
        categoryText: 'Wedding',
        dateText: '2022-02-22',
        detailedDescription:
          'Tyler and Jiayi is getting married! Woohoo!',
        keyFeatures: {
          // responsiveDesign: {
          //   title: '',
          //   description: '',
          // },
          // contentManagement: {
          //   title: '',
          //   description:
          //     '',
          // },
        },
        galleryImages: {
          sampleGalleryImage1: { // If you enable gallery for the example
            alt: 'Alt text for gallery image 1',
            caption: 'Caption for gallery image 1',
          },
        },
        challenges:
          '',
        learnings: '',
      },
    },
    skillsContent: {
      // frontendDevelopment: {
      //   title: 'Frontend Development',
      //   description:
      //     'Building interactive and high-performance user interfaces.',
      // },
      // backendDevelopment: {
      //   title: 'Backend Development',
      //   description: 'Constructing robust server logic and APIs.',
      // },
      // uiUxDesign: {
      //   title: 'UI/UX Design',
      //   description: 'Designing intuitive and aesthetic user experiences.',
      // },
      // devOps: {
      //   title: 'DevOps',
      //   description: 'Automating development and deployment processes.',
      // },
    },
    site: {
      title: 'Emily Miaou Photography',
      description:
        'A modern and performant Astro template to kickstart your project.',
    },
    nav: {
      home: 'Home',
      graduations: 'Graduations',
      weddings: 'Weddings',
      contact: 'Contact',
      events: 'Events',
      landscape: 'Landscape',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | Emily Miaou - Phtotographer, Geochemist',
      pageDescription:
        'Welcome to the portfolio of Emily Miaou, a photographer and geochemist.',
      heroGreeting: "Hi, I'm Emily Miaou",
      heroSubtitlePart1: 'Photographer',
      heroSubtitlePart2: 'Geochemist',
      heroIntroduction: 'Add an introduction here.',
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing YOUR_NAME or a development concept',
      featuredProjectsTitle: 'My latest projects',
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      // mySkillsTitle: 'My Skills',
      // mySkillsDescription:
      //   'Explore the expertise and abilities that define my work and passion.',
    },
    blogPage: {
    //   pageTitle: 'My Technical Blog',
    //   pageDescription:
    //     'Articles and thoughts on web development, software architecture, and new technologies.',
    //   title: 'My Technical Blog',
    //   description:
    //     'Articles and thoughts on web development, software architecture, and new technologies.',
    //   comingSoon: 'Blog posts will appear here soon. Check back later!',
    //   heroImageAlt: 'Hero image for article: ',
    //   publishedOn: 'Published on: ',
    //   readMore: 'Read more',
    //   readingTimeSuffix: 'min read',
    //   searchPlaceholder: 'Search articles...',
    //   filterByTagButtonLabel: 'Filter by tag',
    //   noTagFound: 'No tag found.',
    //   selectTagCommandPlaceholder: 'Search tag...',
    //   allTagsLabel: 'All tags',
    //   noPostsFound: 'No posts found.',
    // },
    // blogPost: {
    //   publishedOn: 'Published on: ',
    //   updatedOn: 'Updated on: ',
    //   heroImageAlt: 'Hero image for article: ',
    //   backToList: 'Back to blog list',
    //   readingTimeSuffix: 'min read',
    //   relatedPostsTitle: 'Continue Reading',
    //   readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact Me',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",

      title: 'Contact Me',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Weddings',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'Weddings',
      metaTitle: "My Projects | Emily Miaou's Portfolio",
      metaDescription: "Discover all of Emily Miaou's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },

    tipsPage: {
      // metaTitle: 'Development Tips | YOUR_NAME',
      // metaDescription:
      //   'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      // title: 'Latest Tips',
      // description:
      //   'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      // noTips: 'No tips to display at the moment.',
      // readTip: 'Read tip',
      // backToList: 'Back to list',
      // featuredTips: 'Featured Tips',
      // allTips: 'All Tips',
      // tipsAvailable: 'tips available',
      // tipAvailable: 'tip available',
      // editOnGithub: 'Edit on GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}
