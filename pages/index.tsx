import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ArtSection />
      <ScheduleSection />
      <ContactSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" id="section_1">
      <div className="section-overlay"></div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-12 mt-auto mb-5 text-center">
            <small>ChokaTenerife abrirá en verano de 2023</small>
            <br />
            <br />
            <a className="btn custom-btn smoothscroll" href="#section_2">
              Aprenda más ahora
            </a>
            <br />
            <br />
            <ul className="social-icon d-flex align-items-center justify-content-center">
              <li className="social-icon-item">
                <a
                  href="https://www.facebook.com/profile.php?id=100087295354394"
                  className="social-icon-link"
                >
                  <span className="bi-facebook"></span>
                </a>
              </li>

              <li className="social-icon-item">
                <a
                  href="https://twitter.com/GeoffreyBuchou"
                  className="social-icon-link"
                >
                  <span className="bi-twitter"></span>
                </a>
              </li>

              <li className="social-icon-item">
                <a
                  href="https://www.instagram.com/chokatenerife"
                  className="social-icon-link"
                >
                  <span className="bi-instagram"></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
            <div className="social-share"></div>
          </div>
        </div>
      </div>

      <div className="video-wrap">
        <video autoPlay loop muted className="custom-video" poster="">
          <source src="video/pexels-ron-lach-6703360.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

function ArtSection() {
  return (
    <section className="artists-section section-padding" id="section_3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="mb-4">ARTE</h2>
          </div>
        </div>

        <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
          <div className="services-info">
            <p className="">
              En Choka puedes disfrutar de musica y muchas otra actividades
              artisticas y culturales cada dia
            </p>

            <h6 className="">
              Musica: concierto / jam session / cursos de baile gratis
            </h6>

            <h6 className="">Teatro (proximo): cursos por niños y adultos</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScheduleSection() {
  return (
    <section className="schedule-section section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white mb-4">Calendario</h2>

            <div className="table-responsive">
              <table className="schedule-table table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Date</th>

                    <th scope="col">Monday</th>
                    <th scope="col">Tuesday</th>
                    <th scope="col">Wednesday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th>
                    <th scope="col">Saturday</th>
                    <th scope="col">Sunday</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th scope="row">Morning</th>

                    <td className="table-background-image-wrap pop-background-image">
                      <h3>Bouldering Class</h3>
                      <p className="mb-2">7:00 - 9:00 AM</p>
                      <p>By Geo</p>
                      <div className="section-overlay"></div>
                    </td>

                    <td style={{ backgroundColor: "#f3dcd4" }}></td>

                    <td className="table-background-image-wrap rock-background-image">
                      <h3>Parkour</h3>
                      <p className="mb-2">7:00 - 9:00 PM</p>
                      <p>By Geo</p>
                      <div className="section-overlay"></div>
                    </td>
                    <td style={{ backgroundColor: "#f3dcd4" }}></td>
                    <td style={{ backgroundColor: "#f3dcd4" }}></td>
                    <td className="table-background-image-wrap rock-background-image">
                      <h3>Dance</h3>
                      <p className="mb-2">7:00 - 9:00 PM</p>
                      <p>By Sophia</p>
                      <div className="section-overlay"></div>
                    </td>
                    <td style={{ backgroundColor: "#f3dcd4" }}></td>
                  </tr>

                  <tr>
                    <th scope="row">Afternoon</th>

                    <td style={{ backgroundColor: "#ecc9c7" }}></td>

                    <td>
                      <h3>Yoga</h3>

                      <p className="mb-2">6:30 - 9:30 PM</p>

                      <p>By Sophia</p>
                    </td>

                    <td style={{ backgroundColor: "#d9e3da" }}></td>
                    <td style={{ backgroundColor: "#f3dcd4" }}></td>
                    <td style={{ backgroundColor: "#f3dcd4" }}></td>
                    <td style={{ backgroundColor: "#f3dcd4" }}></td>
                    <td style={{ backgroundColor: "#f3dcd4" }}></td>
                  </tr>

                  <tr>
                    <th scope="row">Evening</th>

                    <td className="table-background-image-wrap country-background-image">
                      <h3>Cooking Class</h3>

                      <p className="mb-2">4:30 - 7:30 PM</p>

                      <p>By Bruno</p>

                      <div className="section-overlay"></div>
                    </td>

                    <td style={{ backgroundColor: "#d1cfc0" }}></td>

                    <td>
                      <h3>Weekly event</h3>

                      <p className="mb-2">6:00 - 10:00 PM</p>

                      <p>By Members</p>
                    </td>
                    <td style={{ backgroundColor: "#f3dcd4" }}></td>
                    <td style={{ backgroundColor: "#f3dcd4" }}></td>
                    <td style={{ backgroundColor: "#f3dcd4" }}></td>
                    <td style={{ backgroundColor: "#f3dcd4" }}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section section-padding" id="section_6">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <h2 className="text-center mb-4">Direcciones</h2>
            <p className="text-center mb-4">
              C. Hermanos Logman, 38005 Santa Cruz de Tenerife, Spain
            </p>
            <iframe
              className="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5489321544114!2d-16.25679618563779!3d28.463010798485456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cc82d231c93b%3A0x74102ce228f69cb6!2sC.%20Hermanos%20Logman%2C%2038005%20Santa%20Cruz%20de%20Tenerife%2C%20Spain!5e0!3m2!1sen!2sus!4v1670557264052!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function OldCommponent() {
  return (
    <>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">pages/index.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </>
  );
}
