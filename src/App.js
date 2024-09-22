import { InformationCircleIcon as Icon } from '@heroicons/react/20/solid'

export default function Banner() {
  const bannerData = {
    icon: <Icon className="h-5 w-5 text-blue-400" aria-hidden="true" />,
    version: 4,
    href: '/details',
    ariaHidden: true,
  }

  return (
    <div className="banner-wrapper">
      <ActivateBanner
        icon={bannerData.icon}
        hidden={bannerData.ariaHidden}
        version={bannerData.version}
        href={bannerData.href}
      />
    </div>
  )
}

function ActivateBanner({ icon, hidden, version, href }) {
  return (
    <div className="flex">
      <div className="flex-shrink-0">{icon}</div>
      <div className="banner-content">
        <p className="banner-text">
          Yeni bir yazılım güncellemesi mevcuttur. Sürümdeki yenilikleri
          inceleyin (Sürüm: {version})
        </p>
        <p className="banner-details">
          <a href={href} className="banner-details-link">
            Detaylar
            <span aria-hidden={hidden}> &rarr;</span>
          </a>
        </p>
      </div>
    </div>
  )
}
