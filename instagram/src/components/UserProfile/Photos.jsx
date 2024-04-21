function Photos({ photos }) {
    if(photos.length<0){
        return <div className="text-2xl text-center font-bold">No Posts Yet</div>
    }
  return (
<>
<div className="grid grid-cols-3 gap-8 mt-8">
     {photos.length>0 &&  photos.map((photo) => {
        return (
          <div key={photo.photoId} className="group relative">
            <img src={photo.imageSrc} alt={photo.caption} />
            <div className="absolute left-0 bottom-0   gap-3 z-10 justify-center items-center w-full h-full group-hover:flex hidden ">
              <p className="text-white flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>

                {photo.likes.length}
              </p>
              <p className=" text-white flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>

                {photo.comments.length}
              </p>
            </div>
          </div>
        );
      })}
    </div>
    <div className="text-2xl font-bold text-center">
        No Posts Yet
    </div>
</>
  );
}

export default Photos;
