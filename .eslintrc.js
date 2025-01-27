module.exports = {
    extends: ["next/core-web-vitals"], // Next.js 기본 ESLint 설정
    rules: {
        "react/react-in-jsx-scope": "off", // React import 필요성 제거
        "@next/next/no-img-element": "off", // Next.js의 이미지 관련 경고 무시 (예시)
        "no-unused-vars": "off", // 사용되지 않는 변수 경고 무시
    },
    settings: {
        react: {
            version: "detect", // React 버전 자동 감지
        },
    },
};
