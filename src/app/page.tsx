import Intro from "@/components/widgets/Intro";
import Links from "@/components/widgets/Links";
import MyProfile from "@/components/widgets/MyProfile";

export default function Home() {
    return (
        <div className="container max-w-7xl mx-auto px-6 sm:px-4 py-10 sm:py-24">
            <Intro />
            <Links />
            <MyProfile />
        </div>
    );
}
