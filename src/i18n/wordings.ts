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
      technologies: t("resume.technologies"),
      present: t("resume.present"),
      education: t("resume.education"),
      degree: t("resume.degree"),
      secondary: t("resume.secondary"),
      work: t("resume.work"),
      meli:t("resume.meli"),
      meliDesc:t("resume.meli-desc"),
      epiDev: t("resume.epi-dev"),
      epiDevDesc: t("resume.epi-dev-desc"),
      epiInfra: t("resume.epi-infra"),
      epiInfraDesc: t("resume.epi-infra-desc"),
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
      mp: t("projects.mp"),
      mpDesc: t("projects.mp-desc"),
      whatsapp: t("projects.whatsapp"),
      whatsappDesc: t("projects.whatsapp-desc"),
      portfolio: t("projects.portfolio"),
      portfolioDesc: t("projects.portfolio-desc"),
      financia: t("projects.financia"),
      financiaDesc: t("projects.financia-desc"),
      cryptoJournal: t("projects.crypto-journal"),
      cryptoJournalDesc: t("projects.crypto-journal-desc"),
      blockchainNotes: t("projects.blockchain-notes"),
      blockchainNotesDesc: t("projects.blockchain-notes-desc"),
    },
    page404: {
      title: t("404.title"),
      description: t("404.description"),
      button: t("404.button"),
    },
  };
};

export default useWordings;