import Image from "next/image";
import { Tab } from "@headlessui/react";

export default function Sports() {
  return (
    <main>
      <Sections />
    </main>
  );
}

function Sections() {
  return sectionsContent.map((sectionContent) => {
    return (
      <Section key={sectionContent.title} sectionContent={sectionContent} />
    );
  });
}

function Section({ sectionContent }) {
  const { title, mainDesc } = sectionContent;
  const paragraphs = mainDesc.map((text, i) => (
    <SectionParagraph key={i} text={text} />
  ));

  return (
    <section className="about-section section-padding" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="services-info">
              <h2 className="text-white mb-4">{title}</h2>
              {paragraphs}
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="about-text-wrap">
              <Image
                src="./pexels-karolina-grabowska-4498555.jpg"
                className="about-image img-fluid"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionParagraph({ text }) {
  return <p className="text-white">{text}</p>;
}

const sectionsContent = [
  {
    title: "Escalada",
    mainDesc: [
      "La escalada fomenta la resiliencia, la determinación y el compañerismo. Al conquistar rutas desafiantes, tu desarrollará tu fortaleza mental y aprenderas a aceptar riesgos calculados. Físicamente, la escalada mejora la fuerza, la flexibilidad y el equilibrio, al mismo tiempo que promueve la salud cardiovascular. El deporte promueve las habilidades para resolver problemas y agudiza el enfoque, ofreciendo un escape meditativo del estrés diario. En última instancia, la escalada cultiva una sensación de logro, confianza en uno mismo y una profunda conexión con la naturaleza, lo que la convierte en una búsqueda holística tanto para el cuerpo como para la mente.",
      "Viene probar el bulder. Una práctica de escalada sin cuerda ni arnés por paredes y perfiles alcanzando una altura máxima de 4,50m. La práctica está asegurada por grandes colchonetas de aterrizaje.",
      "Desde un nivel muy fácil hasta un nivel más extremo, subes en un entorno propicio para el intercambio y la ayuda mutua. Choka te ofrece un lugar único para vivir, en un ambiente agradable y de convivencia, accesible para todos.",
    ],
  },
  {
    title: "Fit",
    mainDesc: [
      "El entrenamiento de calistenia encarna valores de disciplina, automotivación y perseverancia, fomentando una fuerte ética de trabajo y resiliencia mental. Físicamente, desarrolla fuerza funcional, resistencia y flexibilidad mediante ejercicios de peso corporal, promoviendo un físico equilibrado y una movilidad mejorada. La calistenia también mejora la coordinación, la agilidad y el control del cuerpo, lo que conduce a un mejor estado físico general. Desde una perspectiva mental, aumenta la confianza y la autoestima, infunde una sensación de logro y proporciona una salida positiva para aliviar el estrés. La práctica de la calistenia es un enfoque versátil y accesible del fitness que empodera a las personas para desafiar sus límites y lograr un bienestar físico y mental óptimo.",
    ],
  },
  {
    title: "Slackline",
    mainDesc: [
      "El slackline encarna valores de equilibrio, enfoque y perseverancia, cultivando un sentido de atención plena y presencia. Físicamente, desarrolla la fuerza central, mejora el equilibrio y la coordinación, y mejora la propiocepción y la estabilidad. El slackline también desafía los límites mentales, promoviendo la claridad mental, la concentración y la capacidad de superar el miedo. Fomenta una conexión con la naturaleza, proporcionando una experiencia meditativa y arraigada. En general, el slackline fomenta el bienestar tanto físico como mental, ofreciendo una combinación única de desafío, relajación y autodescubrimiento.",
    ],
  },

  {
    title: "Parkour (Proximo)",
    mainDesc: ["Sugerencia"],
  },

  {
    title: "ExtraEscolares",
    mainDesc: [
      "Nuestro servicio de actividades extraescolares en el polideportivo es la solución ideal para padres que trabajan con niños de 4 a 14 años. Su hijo no solo tendrá la oportunidad de participar en una variedad de actividades emocionantes como escalada, yoga, calistenia y más, pero también proporcionamos tiempo dedicado para tareas escolares y lecciones de apoyo. Esto significa que puede disfrutar de la tranquilidad de saber que su hijo no solo está activo y se divierte, sino que también recibe asistencia académica en un entorno seguro y supervisado. Con nuestro programa integral, puede equilibrar el trabajo y la vida familiar a la perfección, sabiendo que su hijo está prosperando tanto física como académicamente.",
    ],
  },
];
