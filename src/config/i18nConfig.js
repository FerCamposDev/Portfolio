import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const userLang = navigator.language || navigator.userLanguage;
let defaultLocale = userLang.substring(0,2);

// let langSave= localStorage.getItem("lang");
// if(langSave){
//     defaultLocale= langSave;
// }

if(window.location.href.includes('/es')){
    defaultLocale='es';
}else{
    defaultLocale='en';
}

localStorage.setItem("lang",defaultLocale);

i18n
    .use(initReactI18next)
    .init({
        resources:{
            en: {
                translation:{
                    "job": "Full Stack Developer",
                    "contact":{
                        "title": "Contact",
                        "call": "Giving me a call",
                        "whatsapp": "Send me a Whatsapp",
                        "email": "Copy",
                        "email-copied":"Copied email!",
                    },
                    "menu": {
                        "home": "Home",
                        "projects": "Projects",
                        "resume": "Resume",
                        "about": "About Me",
                        "contact": "Contact",
                    },
                    "resume": {
                        "profile": "I am a student of the Computer Engineering degree at UNLaM. I am currently in the second year of my degree. I am especially dedicated to web development with React and Node.js although I also have knowledge in other technologies and in the infrastructure area working with Microsoft Azure.",
                        "location": "Location",
                        "contact": "Contact",
                        "phone": "Phone",
                        "email": "Email",
                        "tecnologies": "Tecnologies",
                        "present": "Present",
                        "education": "Education",
                        "degree": "Computer Engineering.",
                        "secondary": "Bachelor of Economics and Administration",
                        "work": "Work Experience",
                        "epi-dev": "Epidata: Full Stack Developer",
                        "epi-dev-desc": "Web development with React, Node, Express, Java and Deployment with Docker on Azure.",
                        "epi-infra": "Epidata: Infrastructure Support",
                        "epi-infra-desc": `My job was to carry out the migration of all web services hosted on AWS to Azure, reducing the cost of the company in that sector by 100% for a year and a half due to the fact that they had a Microsoft sponsorship that they did not use.
We migrated the Redmine, CRM, SitioWeb (Wordpress) and Jenkins / SonarQube servers.
We also migrated the wordpress website from the .com domain to the .net together with the business email.`,
                        "el-progreso": "Personal Entrepreneurship: Centro Educacional El Progreso",
                        "el-progreso-desc": "I was in charge of selling books and encyclopedias in schools, delivering and collecting monthly fees.",
                        "blancos-line": "Personal Entrepreneurship: Blancos-Line",
                        "blancos-line-desc": "I was in charge of making purchases, sales on public roads, delivering the products and collecting monthly payments.",
                        "knowledge": "Another knowledges",
                        "english": "English",
                        "english-desc": "Intermediate",
                        "spanish": "Spanish",
                        "spanish-desc": "Native",
                        "microsoft-office": "Microsoft Office",
                        "microsoft-office-desc": "Advanced",
                        "oratory": "Course of Oratory",
                        "oratory-desc": "Made in CFP nº415.",
                        "mp": "Mercado-Pago certification",
                        "mp-desc": "Certification on collections with Checkout-Pro.",
                        "download":"Download Resume PDF",
                        "resume-link": "https://drive.google.com/u/0/uc?id=1fqMUCJjHmZZzsCKRqSr1u7OSM0V-Of40&export=download"
                    },
                    "card": {
                        "demo": "Demo"
                    },
                    "projects": {
                        "notes": "My Notes.",
                        "notes-desc": "My first web page with HTML-CSS, uses LocalStorage to store the Notes in Sheets.",
                        "chat": "Live Chat.",
                        "chat-desc": "Live chat created with Vanilla.js HTML / CSS using the Socket.io library.",
                        "whatsapp": "API Whatsapp-Web",
                        "whatsapp-desc": "API that allows the use of WhatsApp through WhatsApp-Web.",
                        "mp": "MercadoPago Checkout.",
                        "mp-desc": "Integration of MercadoPago Checkout-Pro Service for 2020 Certification. Note: Test credentials are in the readme file.",
                        "subjects": "My Subjects.",
                        "subjects-desc": "A WebApp to load the subjects and generate the possible courses to taken at the university, created with React and Material-UI.",
                        "dailyapp": "Daily App (in construction).",
                        "dailyapp-desc": "An Application to keep track of our projects, indicating our problems day by day and automatically generating the records of our days. With Authentication and Firebase Database.",
                        "portfolio": "PortFolio.",
                        "portfolio-desc": "My portfolio created with React and Material-UI with a fully responsive and installable design.",
                    }

                }
            },
            es: {
                translation:{
                    "job": "Desarrollador Full Stack",
                    "contact":{
                        "title": "Contacto",
                        "call": "Llámame",
                        "whatsapp": "Enviar Whatsapp",
                        "email": "Copiar",
                        "email-copied":"Email copiado!",
                    },
                    "menu": {
                        "home": "Inicio",
                        "projects": "Proyectos",
                        "resume": "Currículum",
                        "about": "Sobre Mi",
                        "contact": "Contacto",
                    },
                    "resume": {
                        "profile": "Soy estudiante de la carrera de Ingeniería en Informática de la UNLaM. Actualmente me encuentro cursando el segundo año de la carrera. Me dedico especialmente al desarrollo web con React y Node.js aunque también tengo conocimientos en otras tecnologías y en el área de infraestructura trabajando con Microsoft Azure.",
                        "location": "Localidad",
                        "contact": "Contacto",
                        "phone": "Teléfono",
                        "email": "Email",
                        "tecnologies": "Tecnologias",
                        "present": "Actualidad",
                        "education": "Educación",
                        "degree": "Ingeniería en Informática",
                        "secondary": "Bachiller en Economía y Administración",
                        "work": "Experiencia Laboral",
                        "epi-dev": "Epidata: Desarrollador Full Stack",
                        "epi-dev-desc": "Desarrollo web con React, Node, Express, Java y Despliegue con Docker sobre Azure.",
                        "epi-infra": "Epidata: Soporte Infraestructura",
                        "epi-infra-desc": `Mi labor fue llevar a cabo la migración de todos los servicios web hospedados en AWS hacia Azure, reduciendo el costo de la compañia en ese sector un 100% durante un año y medio debido a que contaban con un patrocinio de Microsoft que no utilizaban.
Migramos los servidores Redmine, CRM, SitioWeb(Wordpress) y Jenkins/SonarQube.
Además migramos el sitio web de wordpress del dominio .com al .net en conjunto al email empresarial.`,
                        "el-progreso": "Emprendimiento Personal: Centro Educacional El Progreso",
                        "el-progreso-desc": "Me encargaba de realizar ventas de libros y enciclopedias en colegios, entregar y cobrar el material mensualmente.",
                        "blancos-line": "Emprendimiento Personal: Blancos Line",
                        "blancos-line-desc": "Me encargaba de las compras, realizar las ventas en la vía pública, entregar los productos y cobrar mensualmente.",
                        "knowledge": "Otros Conocimientos",
                        "english": "Inglés",
                        "english-desc": "Intermedio",
                        "spanish": "Español",
                        "spanish-desc": "Nativo",
                        "microsoft-office": "Microsoft Office",
                        "microsoft-office-desc": "Avanzado",
                        "oratory": "Capacitación en Oratoria",
                        "oratory-desc": "Realizado en el centro de formación profesional n°415.",
                        "mp": "Certificación MercadoPago",
                        "mp-desc": "Certificación sobre cobros con Checkout Pro.",
                        "download":"Descargar Curriculum PDF",
                        "resume-link": "https://drive.google.com/u/0/uc?id=1U3n0i5tbzt0lzH-2LSFBI6SmFoFiMaus&export=download",
                    },
                    "card": {
                        "demo": "Demo"
                    },
                    "projects": {
                        "notes": "Mis Notas.",
                        "notes-desc": "Mi primera página web con HTML/CSS, usa LocalStorage para almacenar las notas en hojas.",
                        "chat": "Chat en Vivo.",
                        "chat-desc": "Chat en vivo creado con Vanilla.js HTML/CSS usando la biblioteca Socket.io.",
                        "whatsapp": "API Whatsapp-Web",
                        "whatsapp-desc": "API que permite la utilización de Whatsapp a través de Whatsapp-Web.",
                        "mp": "MercadoPago Checkout.",
                        "mp-desc": "Integración del Servicio MercadoPago Checkout-Pro para la Certificación 2020. Nota: En el archivo readme se encuentran las credenciales de prueba.",
                        "subjects": "Mis Materias.",
                        "subjects-desc": "Una WebApp para cargar las asignaturas y generar los posibles cursos a cursar en la universidad, creada con React y Material-UI.",
                        "dailyapp": "Daily App (en construcción).",
                        "dailyapp-desc": "Una Aplicación para llevar el control de nuestros proyectos, indicando día a día nuestros problemas y generando automaticamente los registros de nuestos días. Con autenticación y Base de datos Firebase.",
                        "portfolio": "PortFolio.",
                        "portfolio-desc": "Mi portafolio creado con React y Material-UI con un diseño totalmente responsive e instalable.",
                    }
                }
            }
        },
        lng: defaultLocale,
        fallbackLng: "es",

        interpolation: {
            escapeValue: false
        }
    });