import React from 'react';
import MyProfileImage from "../shared/MyProfileImage";
import TechSkills from "../shared/TechSkills";

const MyProfile = () => {
    return (
        <div className="grid grid-cols-6 gap-4 py-20">
            <div className="col-span-2">
                <MyProfileImage />
            </div>

            <div className="col-span-4">
                <TechSkills />
            </div>
        </div>
    );
};

export default MyProfile;
