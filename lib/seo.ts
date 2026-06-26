export const siteUrl = "https://mokdonggoyangibunyang.vercel.app";

export const targetKeywords = ['목동고양이분양', '목동 고양이 분양', '양천구 고양이 분양', '강서구 고양이 분양', '영등포 고양이 분양', '신정동 고양이', '목동 아기고양이'] as const;

export const siteTitle = "목동고양이분양, 건강하고 사랑스러운 가족을 만나는 곳";

export const siteDescription =
  "목동고양이분양 전문 목동고양이분양에서 건강하고 사랑스러운 아기고양이를 만나보세요. 철저한 건강 관리와 전문적인 상담으로 행복한 반려 생활의 시작을 도와드립니다. 지금 바로 문의하세요!";

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "목동고양이분양",
        description: siteDescription,
        inLanguage: "ko-KR",
        telephone: "0505-464-1004",
        knowsAbout: [...targetKeywords],
      },
    ],
  };
}
