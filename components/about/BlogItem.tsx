import Image from "next/image";
import Link from "next/link";

interface BlogItemProps {
  name: string;
  url: string;
  icon: string;
}

export function BlogItem({ name, url, icon }: BlogItemProps) {
  const isInternal = url.startsWith("/");

  if (isInternal) {
    return (
      <li>
        <Link
          href={url}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-gray-50"
        >
          <Image className="w-5" src={icon} alt="" />
          <span>{name}</span>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <a
        href={url}
        className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-gray-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image className="w-5" src={icon} alt="" />
        <span>{name}</span>
      </a>
    </li>
  );
}
