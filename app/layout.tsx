import type { Metadata } from "next";
import {
  getStructuredData,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mokdonggoyangibunyang.vercel.app"),
  title: "목동고양이분양, 건강하고 사랑스러운 가족을 만나는 곳",
  description: "목동고양이분양 전문 목동고양이분양에서 건강하고 사랑스러운 아기고양이를 만나보세요. 철저한 건강 관리와 전문적인 상담으로 행복한 반려 생활의 시작을 도와드립니다. 지금 바로 문의하세요!",
  keywords: ["목동고양이분양", "목동 고양이 분양", "양천구 고양이 분양", "강서구 고양이 분양", "영등포 고양이 분양", "신정동 고양이", "목동 아기고양이"],
  authors: [{ name: "목동고양이분양" }],
  creator: "목동고양이분양",
  publisher: "목동고양이분양",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://mokdonggoyangibunyang.vercel.app",
    siteName: "목동고양이분양",
    title: "목동고양이분양, 건강하고 사랑스러운 가족을 만나는 곳",
    description: "목동고양이분양 전문 목동고양이분양에서 건강하고 사랑스러운 아기고양이를 만나보세요. 철저한 건강 관리와 전문적인 상담으로 행복한 반려 생활의 시작을 도와드립니다. 지금 바로 문의하세요!",
    images: [{ url: "/https://mokdonggoyangibunyang.vercel.app/images/landing/mokdonggoyangibunyang/\uba54\uc778\ucfe4\ubd84\uc591KakaoTalk_20260509_154040995_12.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "목동고양이분양, 건강하고 사랑스러운 가족을 만나는 곳",
    description: "목동고양이분양 전문 목동고양이분양에서 건강하고 사랑스러운 아기고양이를 만나보세요. 철저한 건강 관리와 전문적인 상담으로 행복한 반려 생활의 시작을 도와드립니다. 지금 바로 문의하세요!",
    images: ["/https://mokdonggoyangibunyang.vercel.app/images/landing/mokdonggoyangibunyang/\uba54\uc778\ucfe4\ubd84\uc591KakaoTalk_20260509_154040995_12.jpg"],
  },
  alternates: {
    canonical: "https://mokdonggoyangibunyang.vercel.app",
  },
  category: "목동고양이분양",
  verification: {
    other: {
      "naver-site-verification": "PENDING",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getStructuredData();

  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="PENDING" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans pb-safe-floating lg:pb-0">{children}</body>
    </html>
  );
}
