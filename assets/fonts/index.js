import localFont from 'next/font/local';
import { Noto_Sans_KR } from 'next/font/google';

export const kkubulinm = localFont({ src: './BMKkubulim.otf' });

export const notoSansKr = Noto_Sans_KR({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const bmHannaAir = localFont({ src: './BMHANNAAir_otf.otf' });
