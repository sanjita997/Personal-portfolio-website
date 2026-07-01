import Link from "next/link";
import type { services } from "@/data/site";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="card">
      <div className="icon-box" aria-hidden="true">
        <Icon size={24} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link className="link" href={`/services/${service.slug}`}>
        Explore service
      </Link>
    </article>
  );
}
