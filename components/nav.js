import Link from 'next/link';

const links = [
  { href: '/cart', label: 'My Cart' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  return (
    <nav>
      <ul className="">
        <li>
          <Link href="/">
            <a className="">
              Jam Store
            </a>
          </Link>
        </li>
        <ul className="">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <a className="">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}