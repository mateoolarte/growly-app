import { getNavigationData } from "@/services/getNavigationData";
import Link from "next/link";

export async function Nav() {
  const data = await getNavigationData("footer");
  const hasData = data && data.length > 0;

  if (!hasData) return null;

  return (
    <nav className="footer-nav">
      <ul className="footer-list">
        {data.map((item) => {
          return (
            <li key={item.id} className="footer-listItem">
              <Link href={item.url || ""} className="footer-listLink">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
