import { MarkerMap } from "./MarkerMap"


const contactItems = [
  {
    title: 'Soita Meille',
    value: '+358 40 123 4567',
    detail: 'Ma-Pe 08:00 - 18:00',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4.5 5.5C5.5 10.5 9.5 14.5 14.5 15.5L17.5 12.5C18.1 11.9 19 11.7 19.8 11.9L22 12.5C22.9 12.8 23.5 13.6 23.5 14.5V19C23.5 20.1 22.6 21 21.5 21C11.3 21 3 12.7 3 2.5C3 1.4 3.9 0.5 5 0.5H9.5C10.4 0.5 11.2 1.1 11.5 2L12.1 4.2C12.3 5 12.1 5.9 11.5 6.5L8.5 9.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Sähköposti',
    value: 'info@cleanlife.fi',
    detail: 'Vastaamme 24h sisällä',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 6.5H20C21.1 6.5 22 7.4 22 8.5V17.5C22 18.6 21.1 19.5 20 19.5H4C2.9 19.5 2 18.6 2 17.5V8.5C2 7.4 2.9 6.5 4 6.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 8.5L12 14.5L2 8.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Toimisto',
    value: 'Mannerheimintie 1',
    detail: '00100 Helsinki',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 21C15.5 17.6 18 14.4 18 11C18 7.7 15.3 5 12 5C8.7 5 6 7.7 6 11C6 14.4 8.5 17.6 12 21Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
]


const Yhteystiedot = () => {
  return (
    <aside className="hidden w-full max-w-[420px] min-[1028px]:block">
      <div className="rounded-4xl bg-primary p-8 text-white shadow-[0_24px_50px_-30px_rgba(2,126,111,0.8)]">
        <h3 className="text-2xl font-bold">Yhteystiedot</h3>
        <div className="mt-6 space-y-6">
          {contactItems.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40  bg-white/15">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-white/80">{item.title}</p>
                <p className="text-lg font-semibold">{item.value}</p>
                <p className="text-sm text-white/70">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7">
          <div className="relative h-40 w-full overflow-hidden rounded-2xl">
            <MarkerMap />
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Yhteystiedot
