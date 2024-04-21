import { PropTypes } from "prop-types";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../../context/user";
import useUser from "../../hooks/use-user";
import { useEffect } from "react";
import { toggleFollow } from "../../services/firebase";

export default function ProfileHeader({
  profile,
  photosCount,
  followingCount,
  followersCount,
  setFollowersCount,
}) {
  const { user: loggedInUser } = useContext(UserContext);
  const { user } = useUser(loggedInUser.uid);
  const [followingProfile, setFollowingProfile] = useState(null);

  const handleToggleFollow = async () => {
    setFollowingProfile((followingProfile) => !followingProfile);
    await toggleFollow(
      user.docId,
      profile.docId,
      user.userId,
      profile.userId,
      followingProfile
    );
    //dispatch props
    setFollowersCount({
      followersCount: followingProfile
        ? followersCount - 1
        : followersCount + 1,
    });
  };

  useEffect(() => {
    if (user) {
      const isFollowingProfile = user?.following.includes(profile.userId);
      setFollowingProfile(isFollowingProfile);
    }
  }, [user?.username]);
  return (
    
      <div className="grid grid-cols-3 gap-6 mb-12">
        <div className="profileAvatar justify-self-center items-center">
          <img
            src={`/images/avatars/${profile?.username}.jpg`}
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="col-span-2 justify-self-start items-center">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="text-2xl">{profile?.username}</div>

              <div>
                {user?.username !== profile?.username && (
                  <button
                    onClick={handleToggleFollow}
                    className={`${
                      followingProfile
                        ? "border-2 border-black-light px-2 rounded"
                        : "bg-blue-medium text-white py-1 px-2 rounded"
                    }`}
                  >
                    {followingProfile ? "Unfollow" : "Follow"}
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-start gap-3">
              <div>
                <span className="mr-1 font-bold"> {photosCount}</span>
                posts
              </div>
              <div>
                <span className="mr-1 font-bold"> {followersCount}</span>
                {followersCount <= 1 ? "follower" : "followers"}
              </div>
              <div>
                {" "}
                <span className="mr-1 font-bold"> {profile.followingCount}</span>
                following
              </div>
            </div>
            <div>
              <div className="bold">{profile?.fullName}</div>
              <div>this is my bio</div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

ProfileHeader.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string,
    userId: PropTypes.string,
  }).isRequired,
  photosCount: PropTypes.number.isRequired,
  followersCount: PropTypes.number.isRequired,

  setFollowersCount: PropTypes.func.isRequired,
};
