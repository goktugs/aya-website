import { siteConfig } from "@/shared/config.ts";
// import { type Language } from "@/shared/i18n/languages.ts";
import { Layout } from "@/shared/components/layouts/default/layout.tsx";
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

// interface CommunityPageProps {
//   params: {
//     // lang: Language;
//   };
// }

const CommunityPage = (/* props: CommunityPageProps */) => {
  const placeholders: Record<string, string> = {
    // lang: props.params.lang,
  };

  return (
    <Layout placeholders={placeholders}>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <ProfileList />
      </section>
    </Layout>
  );
};

export { metadata, CommunityPage, CommunityPage as default };
