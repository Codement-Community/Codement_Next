// No need for "use client" as the middleware handles the redirect
import { currentUser } from "@clerk/nextjs";

export default async function AdminPage() {
  const user = await currentUser();

  // Middleware handles redirection already, so no need to check role here

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Manage events and resources here</p>
    </div>
  );
}
