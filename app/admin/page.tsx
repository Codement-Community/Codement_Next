import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AdminPage = () => {
  return (
    <div className="wrapper">
      {/* Admin Header */}
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* Section for Managing Events */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h2 className="text-2xl font-bold">Manage Events</h2>
        <p className="mb-4">Create, update, or delete events.</p>
        <Button asChild size="lg" className="button">
          <Link href="/admin/eventsmanage/">
            Manage Events
          </Link>
        </Button>
      </section>

      {/* Section for Managing Resources */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h2 className="text-2xl font-bold">Manage Resources</h2>
        <p className="mb-4">Create or update resources.</p>
        <Button asChild size="lg" className="button">
          <Link href="/admin/resources">
            Manage Resources
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default AdminPage;
