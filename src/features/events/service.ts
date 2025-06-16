// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/events_ui';
// import placeholderImage from '@/assets/placeholder.webp';
import type {
  ProjectData, TranslatedProject
} from './type';

const SocalScioly2023 = Object.entries(import.meta.glob(
  '/src/assets/Events/2023-04-08 SoCal State Science Olympiad/*.webp',
  { eager: true, import: 'default' }
)).map(([path, src], index) => ({
  id: path,
  src,
}));

const AveryDD2019 = Object.entries(import.meta.glob(
  '/src/assets/Events/2019-05-23 Avery DD/*.webp',
  { eager: true, import: 'default' }
)).map(([path, src], index) => ({
  id: path,
  src,
}));

const RioHondoScioly2020 = Object.entries(import.meta.glob(
  '/src/assets/Events/2020-02-01 Rio Hondo Science Olympiad/*.webp',
  { eager: true, import: 'default' }
)).map(([path, src], index) => ({
  id: path,
  src,
}));


const projectsListUnsorted: Array<ProjectData> = [
  {
    id: 'SocalScioly2023', // Unique identifier for translations
    slug: 'socal-scioly-2023', // Used in the URL
    date: '2023-04-08', // Generic date
    galleryImages: SocalScioly2023,
  },
  {
    id: 'AveryDD2019', // Unique identifier for translations
    slug: 'avery-dd-2019', // Used in the URL
    date: '2019-05-23', // Generic date
    galleryImages: AveryDD2019,
  },
  {
    id: 'RioHondoScioly2020', // Unique identifier for translations
    slug: 'rio-hondo-scioly-2020', // Used in the URL
    date: '2020-02-01', // Generic date
    galleryImages: RioHondoScioly2020,
  },
  
];

export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  // Sort by date, most recent first. Ensure 'date' is a valid date string.
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

// Helper function to translate a single project
function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  type ProjectIdKey =
    keyof (typeof ui)[typeof defaultLanguage]['projectsContent'];
  const currentProjectId = project.id as ProjectIdKey;

  const projectContentSource = ui[lang]?.projectsContent?.[currentProjectId]
    ? ui[lang].projectsContent
    : ui[defaultLanguage].projectsContent;

  const i18nData = projectContentSource[currentProjectId];

  if (!i18nData) {
    // Fallback if translation for the project ID is missing
    // This might happen if i18n/ui.ts is not updated after adding a new project
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}. Using default values.`
    );
    return {
      ...project,
      title: project.id, // Fallback title
      description: 'Description missing for this project.', // Fallback description
      imageAltText: 'Placeholder image', // Fallback alt text
      // categoryText: project.category,
      dateText: project.date,
      detailedDescription: 'Detailed description missing.',
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => ({
          ...kf,
          title: kf.id,
          description: 'N/A',
        })) ?? [],
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: 'N/A',
        })) ?? [],
      challenges: 'Challenges information missing.',
      learnings: 'Learnings information missing.',
    };
  }

  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<
        string,
        { title: string; description: string } | undefined
      >;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: 'Description missing',
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<
        string,
        { alt: string; caption: string } | undefined
      >;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: '',
      };
      return {
        ...gi, // This includes src and id
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.category,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription:
      i18nData?.detailedDescription ?? 'Detailed description missing',
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData?.challenges ?? 'Challenges information missing',
    learnings: i18nData?.learnings ?? 'Learnings information missing',
  };
}

// Function to get projects with translated content
export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

// Function to get a single project by its slug (untranslated)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

// Function to get a single translated project by its slug
export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
}

// Skills
export const skillsList: Array<SkillData> = [
  // {
  //   id: 'frontendDevelopment',
  //   iconName: 'MonitorSmartphone',
  //   technologies: [
  //     { id: 'html', name: 'HTML' },
  //     { id: 'css', name: 'CSS' },
  //     { id: 'javascript', name: 'JavaScript' },
  //     { id: 'typescript', name: 'TypeScript' },
  //   ],
  // },
  // {
  //   id: 'backendDevelopment',
  //   iconName: 'ServerCog',
  //   technologies: [
  //     { id: 'nodejs', name: 'Node.js' },
  //     { id: 'restapi', name: 'REST APIs' },
  //   ],
  // },
  // {
  //   id: 'uiUxDesign',
  //   iconName: 'PenTool',
  //   technologies: [
  //     { id: 'figma', name: 'Figma' },
  //     { id: 'responsiveDesign', name: 'Responsive Design' },
  //   ],
  // },
  // {
  //   id: 'devOps',
  //   iconName: 'Network',
  //   technologies: [
  //     { id: 'git', name: 'Git' },
  //     { id: 'docker', name: 'Docker' },
  //   ],
  // },
];

// Function to get skills with translated content
export function getTranslatedSkills(
  lang: LanguageCode | undefined
): Array<TranslatedSkill> {
  const currentLang = lang ?? defaultLanguage;

  return skillsList.map((skill) => {
    type SkillIdKey =
      keyof (typeof ui)[typeof defaultLanguage]['skillsContent'];
    const currentSkillId = skill.id as SkillIdKey;

    const skillContentSource = ui[currentLang]?.skillsContent?.[currentSkillId]
      ? ui[currentLang].skillsContent
      : ui[defaultLanguage].skillsContent;

    const skillTranslations = skillContentSource[currentSkillId];

    if (!skillTranslations) {
      // Fallback if translation for the skill ID is missing
      console.warn(
        `Translation missing for skill ID: ${skill.id} in language: ${lang}. Using default values.`
      );
      return {
        ...skill,
        title: skill.id, // Fallback title
        description: 'Description missing for this skill.', // Fallback description
      };
    }

    return {
      ...skill, // This includes id and iconName
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}
