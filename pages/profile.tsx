import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return '<div>Loading...<div>';
  if (error) return `<div>${error.message}</div>`;

  return (
    <>
      {user ? (
        <div>
          <img src={user.picture} alt="" />
          <dl>
            <dt>name</dt>
            <dd>{user.name}</dd>
            <dt>email</dt>
            <dd>{user.email}</dd>
            <dt>nick name</dt>
            <dd>{user.nickname}</dd>
          </dl>
        </div>
      ) : (
        <div>Not Logged In</div>
      )}
      <Link href="/">Top</Link>
    </>
  )
}
