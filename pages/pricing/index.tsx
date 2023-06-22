import { H1, H2 } from "../../components/typography";

export default function Pricing() {
  return (
    <main>
      <PricingSection />
    </main>
  );
}

const prices = [
  {
    name: "Bono x10 Entrada Unica",
    desc: "Permite el acceso a todo los servicios en acceso libre: bulder / sala de fitness / espacios de estiramiento / slackline",
    price: 70,
    subtitle: "valid por 6 meses",
  },
  {
    name: "Cursos escalada socios",
    desc: "Cursos -20%",
    price: 50,
    subtitle: "valid por 1 mes",
  },
  {
    name: "Cursos escalada no socios",
    desc: "Permite el acceso a los cursos sin descuentos",
    price: 70,
    subtitle: "valid por 1 mes",
  },
  {
    name: "Fit o yoga bono 10 sesiones",
    desc: "Permite cursos de yoga o fit 1/dia",
    price: 70,
    subtitle: "valid por 3 meses",
  },
  {
    name: "Fit o Yoga socios",
    desc: "Permite cursos de yoga o fit 1/dia",
    price: 50,
    subtitle: "valid por 1 mes",
  },
  {
    name: "Estraescolares 2 dias",
    desc: "1h escalada bloc + 1h teatro + tarea + acceso libre o descanso 2j/semaines",
    price: 100,
    subtitle: "valid por 1 mes",
  },
  {
    name: "Estraescolares 3 dias",
    desc: "1h escalada bloc + 1h teatro + tarea + acceso libre o descanso 3j/semaines",
    price: 140,
    subtitle: "valid por 1 mes",
  },
  {
    name: "Estraescolares 5 dias",
    desc: "1h escalada bloc + 1h teatro + tarea + acceso libre o descanso 5j/semaines",
    price: 200,
    subtitle: "valid por 1 mes",
  },
];
function PriceForAPiece(props) {
  const { name, desc, price, subtitle } = props;
  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h3>
        <p className="mt-6 text-base leading-7 text-gray-600">{desc}</p>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-6">
          <div className="mx-auto max-w-xs px-8">
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                {price}€
              </span>
            </p>
            <p>
              <span className="text-sm font-italic tracking-tight text-gray-400">
                {subtitle}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingSection() {
  return (
    <section
      className="pricing-section section-padding section-bg"
      id="section_5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <H1>Precio</H1>
          </div>

          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <H2>2 options: Subscription or A la carte</H2>
              </div>

              <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    Membership
                  </h3>
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    Unlimitted access to the whole facility and many discounts.
                    Profita de + de escalada, yoga, fit +
                  </p>
                  <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                      Unlimited access
                    </h4>
                    <div className="h-px flex-auto bg-gray-100"></div>
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                  >
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Bulder
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Sala de fitness
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Espacios de estiramiento
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Slackline
                    </li>
                  </ul>
                  <div className="mt-10 flex items-center gap-x-4">
                    <div className="h-px flex-auto bg-gray-100"></div>
                  </div>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-1 sm:gap-6"
                  >
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      1 cursos gratis per semana de Yoga o fit
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Descuento por los cursos de escalada, yoga, fit
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Descuento por familia
                    </li>
                  </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                          500€
                        </span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                          /ano
                        </span>
                      </p>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        320€ por 6 meses
                      </p>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        60€/mes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {prices.map((price, i) => (
                <PriceForAPiece key={i} {...price} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
