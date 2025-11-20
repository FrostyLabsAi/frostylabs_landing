import { getRequestConfig } from "next-intl/server";
import { getLocaleAction } from "./get-locale";

let defaultMessages: any = undefined;

export default getRequestConfig(async () => {
  const locale = await getLocaleAction();

  if (!defaultMessages) {
    defaultMessages = (await import(`../messages/en.json`)).default;
  }

  let messages = defaultMessages;
  
  // Try to load locale-specific messages, fallback to English
  if (locale !== "en") {
    try {
      const localeMessages = (await import(`../messages/${locale}.json`)).default;
      messages = { ...defaultMessages, ...localeMessages };
    } catch (error) {
      console.warn(`Failed to load messages for locale: ${locale}, using English`);
    }
  }

  return {
    locale,
    messages,
    getMessageFallback({ key, namespace }) {
      return `${namespace}.${key}`;
    },
  };
});

