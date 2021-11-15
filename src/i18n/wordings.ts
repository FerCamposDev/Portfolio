import { useTranslation } from "react-i18next";

const useWordings = () => {
  const { t } = useTranslation();

  return {
    job: t('job'),
    contact: {
      title: t('contact.title'),
      call: t('contact.call'),
      whatsapp: t('contact.whatsapp'),
      email: t('contact.email'),
      emailCopied: t('contact.email-copied'),
    },
    menu: {
      home: t('menu.home'),
      projects: t('menu.projects'),
      resume: t('menu.resume'),
      about: t('menu.about'),
      contact: t('menu.contact'),
    },
    resume: {
      profile: t("resume.profile"),
      location: t("resume.location"),
      contact: t("resume.contact"),
      phone: t("resume.phone"),
      email: t("resume.email"),
      tecnologies: t("resume.tecnologies"),
      present: t("resume.present"),
      education: t("resume.education"),
      degree: t("resume.degree"),
      secondary: t("resume.secondary"),
      work: t("resume.work"),
      epiDev: t("resume.epi-dev"),
      epiDevDesc: t("resume.epi-dev-desc"),
      epiInfra: t("resume.epi-infra"),
      epiInfraDesc: `My job was to carry out the migration of all web services hosted on AWS to Azure, reducing the cost of the company in that sector by 100% for a year and a half due to the fact that they had a Microsoft sponsorship that they did not use.
  We migrated the Redmine, CRM, SitioWeb (Wordpress) and Jenkins / SonarQube servers.
  We also migrated the wordpress website from the .com domain to the .net together with the business email.`,
      elProgreso: t("resume.el-progreso"),
      elProgresoDesc: t("resume.el-progreso-desc"),
      blancosLine: t("resume.blancos-line"),
      blancosLineDesc: t("resume.blancos-line-desc"),
      knowledge: t("resume.knowledge"),
      english: t("resume.english"),
      englishDesc: t("resume.english-desc"),
      spanish: t("resume.spanish"),
      spanishDesc: t("resume.spanish-desc"),
      microsoftOffice: t("resume.microsoft-office"),
      microsoftOfficeDesc: t("resume.microsoft-office-desc"),
      oratory: t("resume.oratory"),
      oratoryDesc: t("resume.oratory-desc"),
      mp: t("resume.mp"),
      mpDesc: t("resume.mp-desc"),
      download: t("resume.download"),
      resumeLink: t("resume.resume-link"),
    },
    card: {
      demo: t("card.demo"),
    },
    projects: {
      notes: t("projects.notes"),
      notesDesc: t("projects.notes-desc"),
      chat: t("projects.chat"),
      chatDesc: t("projects.chat-desc"),
      whatsapp: t("projects.whatsapp"),
      whatsappDesc: t("projects.whatsapp-desc"),
      mp: t("projects.mp"),
      mpDesc: t("projects.mp-desc"),
      subjects: t("projects.subjects"),
      subjectsDesc: t("projects.subjects-desc"),
      dailyapp: t("projects.dailyapp"),
      dailyappDesc: t("projects.dailyapp-desc"),
      portfolio: t("projects.portfolio"),
      portfolioDesc: t("projects.portfolio-desc"),
    }
  };
};

export default useWordings;