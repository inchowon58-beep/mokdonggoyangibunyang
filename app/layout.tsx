import type { Metadata } from "next";
import {
  getStructuredData,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mokdong.dmcmusic.co.kr"),
  title: "목동고양이분양, 건강하고 사랑스러운 가족을 만나는 곳",
  description: "목동고양이분양 전문 목동고양이분양에서 건강하고 사랑스러운 아기고양이를 만나보세요. 철저한 건강 관리와 전문적인 상담으로 행복한 반려 생활의 시작을 도와드립니다. 지금 바로 문의하세요!",
  keywords: ["https://mokdong.dmcmusic.co.kr/"],
  authors: [{ name: "https://mokdong.dmcmusic.co.kr/" }],
  creator: "https://mokdong.dmcmusic.co.kr/",
  publisher: "https://mokdong.dmcmusic.co.kr/",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://mokdong.dmcmusic.co.kr",
    siteName: "https://mokdong.dmcmusic.co.kr/",
    title: "목동고양이분양, 건강하고 사랑스러운 가족을 만나는 곳",
    description: "목동고양이분양 전문 목동고양이분양에서 건강하고 사랑스러운 아기고양이를 만나보세요. 철저한 건강 관리와 전문적인 상담으로 행복한 반려 생활의 시작을 도와드립니다. 지금 바로 문의하세요!",
    images: [{ url: "/images/landing-01.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "목동고양이분양, 건강하고 사랑스러운 가족을 만나는 곳",
    description: "목동고양이분양 전문 목동고양이분양에서 건강하고 사랑스러운 아기고양이를 만나보세요. 철저한 건강 관리와 전문적인 상담으로 행복한 반려 생활의 시작을 도와드립니다. 지금 바로 문의하세요!",
    images: ["/images/landing-01.jpg"],
  },
  alternates: {
    canonical: "https://mokdong.dmcmusic.co.kr",
  },
  category: "https://mokdong.dmcmusic.co.kr/",
  verification: {
    other: {
      "naver-site-verification": "5faf228033348952b7a74aa7c397267f4480f33f",
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
        <meta name="naver-site-verification" content="5faf228033348952b7a74aa7c397267f4480f33f" />
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
