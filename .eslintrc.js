module.exports = {
    extends: ["next/core-web-vitals"], // Next.js 기본 ESLint 설정
    rules: {
        "react/react-in-jsx-scope": "off", // React import 필요성 제거
    },
    settings: {
        react: {
            version: "detect", // React 버전 자동 감지
        },
    },
};
