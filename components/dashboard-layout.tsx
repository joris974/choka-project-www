import Link from "next/link";
import Image from "next/image";
import logoImg from "../public/logo.png";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import LocaleSwitcher from "./locale-switcher";

const links = [
  { name: "Actividades", url: "/sports" },
  { name: "Restaurante & Escena", url: "/restaurant" },
  { name: "Empresas", url: "/groups" },
  { name: "Blog", url: "/blog" },
  { name: "Calendario", url: "/calendar" },
  { name: "Precio", url: "/pricing" },
];

function MenuLink({ name, url }) {
  return (
    <Link href={url} className="text-sm font-semibold leading-6 text-gray-900">
      {name}
    </Link>
  );
}

function MenuLinks() {
  return links.map(({ name, url }, i) => (
    <MenuLink key={i} name={name} url={url} />
  ));
}

function DrawerMenuLink({ name, url }) {
  return (
    <Link
      href={url}
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    >
      {name}
    </Link>
  );
}

function DrawerMenuLinks() {
  return links.map(({ name, url }, i) => (
    <DrawerMenuLink key={i} name={name} url={url} />
  ));
}

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Choka Project</span>
            <Image
              src={logoImg}
              alt="Choka Project"
              className="h-8 w-auto"
              width={250}
              height={250}
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <MenuLinks />

          <LocaleSwitcher />
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Choka Project</span>
              <Image
                src={logoImg}
                alt="Choka Project"
                className="h-8 w-auto"
                width={250}
                height={250}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <DrawerMenuLinks />
                <LocaleSwitcher />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h2 className="text-white mb-lg-0">Choka Project</h2>
            </div>

            <div className="col-lg-6 col-12 d-flex justify-content-lg-end align-items-center">
              <ul className="social-icon d-flex justify-content-lg-end">
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
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4 pb-2">
            <h5 className="site-footer-title mb-3">Enlaces</h5>

            <ul className="site-footer-links">
              <li className="site-footer-link-item">
                <a href="#section_2" className="site-footer-link click-scroll">
                  Sobre
                </a>
              </li>

              <li className="site-footer-link-item">
                <a href="#section_3" className="site-footer-link click-scroll">
                  Equipo
                </a>
              </li>

              <li className="site-footer-link-item">
                <a href="#section_4" className="site-footer-link click-scroll">
                  Calendario
                </a>
              </li>

              <li className="site-footer-link-item">
                <a href="#section_5" className="site-footer-link click-scroll">
                  Precio
                </a>
              </li>

              <li className="site-footer-link-item">
                <a href="#section_6" className="site-footer-link click-scroll">
                  Direcciones
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <h5 className="site-footer-title mb-3">¿Tengo una pregunta?</h5>

            <p className="text-white d-flex mb-1">
              <a href="tel: +34607641905" className="site-footer-link">
                + 34 607 64 19 05
              </a>
            </p>

            <p className="text-white d-flex">
              <a
                href="mailto:contact@choka-project.com"
                className="site-footer-link"
              >
                contact@choka-project.com
              </a>
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-11 mb-4 mb-lg-0 mb-md-0">
            <h5 className="site-footer-title mb-3">Direcciones</h5>

            <p className="text-white d-flex mt-3 mb-2">
              Zona Costa-Sur, Santa-Cruz, Tenerife, Canarias, España
            </p>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mt-5">
              <p className="copyright-text">Copyright © 2023 ChokaTenerife</p>
            </div>

            <div className="col-lg-8 col-12 mt-lg-5">
              <ul className="site-footer-links">
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">
                    Terms &amp; Conditions
                  </a>
                </li>

                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
