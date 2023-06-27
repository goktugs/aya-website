import { siteConfig } from "@/shared/config/site.ts";
import { type Language } from "@/shared/i18n.ts";
import { Layout } from "@/shared/components/layout.tsx";
import { ProfileList } from "./profile-list.tsx";

// TODO(@eser) add more from https://beta.nextjs.org/docs/api-reference/metadata
const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    // maximumScale: 1,
  },
};

interface PeoplePageProps {
  params: {
    lang: Language;
  };
}

const PeoplePage = (props: PeoplePageProps) => {
  const placeholders: Record<string, string> = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    lang: props.params.lang,
  };

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center pt-6 pb-8 md:py-10 gap-6">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <ProfileList />
        </div>
      </section>
    </Layout>
  );
};

export { metadata, PeoplePage, PeoplePage as default };
