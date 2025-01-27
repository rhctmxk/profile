const TechSkills = () => {
    const skillsData = [
        {
            title: "1. 사용자 경험과 성능 최적화를 최우선으로 생각하는 개발자",
            details: [
                "React 기반의 풀스택 프레임워크로, SSR 및 SSG를 지원하여 초기 로드시간 67% 개선.",
                "Next.js의 CSR 기반 전환으로 UI 반응성 및 사용자 인터랙션 속도 30% 개선.",
            ],
        },
        {
            title: "2. 다함께 성장하는 팀 문화를 주도하는 개발자",
            details: [
                "Figma와 협업 도구를 적극적으로 활용하여 백엔드와 사내 직원들에게 공유하여 원활한 소통을 이끌어 냄.",
                "코드 리뷰 문화를 정착시키고 클린 코드 원칙을 팀 내에 공유하여 협업 효율 30% 향상.",
            ],
        },
        {
            title: "3. 새로운 도전을 통해 기술적 깊이를 확장하는 개발자",
            details: [
                "Next.js의 API Routes와 Vercel 같은 서버리스 플랫폼 통합으로 확장성 증가.",
                "프로젝트의 공통 기능과 UI 요소를 재사용 가능한 모듈 형태로 구현하여 개발 속도와 코드 재사용성 극대화.",
            ],
        },
    ];

    return (
        <div className="py-10 space-y-10">
            {skillsData.map((skill, index) => (
                <div key={index} className="space-y-3">
                    {/* Title */}
                    <h2 className="text-3xl font-semibold">{skill.title}</h2>
                    {/* Details */}
                    <ul className="space-y-2 pl-5 list-disc text-lg">
                        {skill.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default TechSkills;
