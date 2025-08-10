function ProfileCard({ user }) {
  return (
    <div className="card">
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>{user.email}</p>
      <p>{user.age}</p>
    </div>
  );
}

export default ProfileCard;
