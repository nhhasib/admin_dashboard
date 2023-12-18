import React from 'react';

const Profile = () => {

const user={
  displayName:'Nafiul Hasan Hasib',
  photoURL:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fflat-business-man-user-profile-avatar-icon-vector-4333097&psig=AOvVaw3i9gpm2rbLtSCrPodYCI33&ust=1702965370112000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCU_MSmmIMDFQAAAAAdAAAAABAD',
  address:'Tongi,Gazipur',
  order:[{productID:'Shippori_Antique',price:'100'},{productID:'Shippori_Antique',price:'100'}]

}


    return (
        <div>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Profile</p>
      
        </div>
    );
};

export default Profile;