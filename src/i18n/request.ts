import { Locale, SUPPORTED_LOCALES } from '@/lib/interface';
import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';
 
export default getRequestConfig(async () => {
  // Static for now, we'll change this later
//   const locale = 'jp';
  
  const store = await cookies();
  const cookieLocale = store.get('locale')?.value;
  const locale:Locale = SUPPORTED_LOCALES.includes(cookieLocale as Locale) ? (cookieLocale as Locale) : 'ko';
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});