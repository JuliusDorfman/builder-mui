import "../styles/globals.css";
import "@fontsource/public-sans";
import type { AppProps } from "next/app";

// future links for child blocks
// https://www.builder.io/c/docs/custom-components-children
// https://github.com/BuilderIO/builder/blob/main/examples/next-js-builder-site/src/components/material-table.tsx
// https://github.com/BuilderIO/builder/blob/main/examples/next-js-builder-site/src/components/material-tabs.tsx
// https://github.com/BuilderIO/builder/blob/main/examples/next-js-builder-site/src/components/tooltip.tsx
// https://forum.builder.io/t/custom-builder-react-component-that-needs-redux-data/38/2
// https://mui.com/material-ui/guides/composition/#wrapping-components
// https://forum.builder.io/t/cant-use-flex-grid-with-slots/2892/9
// https://github.com/BuilderIO/builder/blob/dc43381077239c2cdc9c9af8e949796ddf0bf2ac/packages/react/src/blocks/Symbol.tsx#L88-L90
// https://forum.builder.io/t/creating-a-symbol-with-a-react-component-inside/897/2
// https://ideas.builder.io/ideas/PROD-I-61

// https://www.builder.io/c/docs/custom-components-children#adding-editable-regions-to-custom-components
// https://www.builder.io/c/docs/devtools
//! https://www.builder.io/c/docs/sdk-comparison

// Forum Q: How would I go about working with an icon library in Builder.io?

// https://forum.builder.io/t/how-to-add-dynamic-editing-regions-to-custom-components/1323
// https://forum.builder.io/t/how-do-i-register-custom-components-for-only-certain-models/434
// https://github.com/BuilderIO/builder/blob/main/plugins/example-app-campaign-builder/src/interfaces/custom-editor.ts
// https://github.com/BuilderIO/builder/blob/main/plugins/example-app-campaign-builder/src/components/page-link.tsx
// https://github.com/BuilderIO/builder/blob/main/plugins/example-app-campaign-builder/src/plugin.ts
// https://github.com/BuilderIO/builder/blob/main/packages/widgets/src/components/Tabs.config.ts
// https://github.com/davedbase/builderio-type-extensions
// https://github.com/Kenzitron/builderio-nextjs-isr-seo-starter
// https://github.com/RussOakham/next13-builderio-demo

// https://www.builder.io/blog/next-13-app-router

// https://parall.ax/

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
