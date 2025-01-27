import Image from "next/image";

const MyProfileImage = () => {
    return (
        <div className="w-full max-w-sm items-center mx-auto px-5">
            <Image
                className="rounded-lg w-full h-auto"
                alt="My Profile"
                src="/images/MyProfile.jpg"
                width={300}
                height={500}
                priority={true}
                unoptimized
            />
        </div>
    );
};

export default MyProfileImage;
