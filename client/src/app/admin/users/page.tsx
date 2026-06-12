import { AdminLayout } from "../admin-layout";
import { Button } from "@/components/ui/button";

const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Customer',
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael@example.com',
    role: 'Customer',
  },
];

export default function AdminUsersPage() {
    return (
        <AdminLayout>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
              Administration
            </p>
    
            <h1 className="text-5xl font-bold text-white mt-3">
              Users
            </h1>
    
            <p className="text-white/50 mt-3">
              Manage registered users.
            </p>
    
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-violet-400/50">
                      Name
                    </th>
    
                    <th className="text-left p-6 text-violet-400/50">
                      Email
                    </th>
    
                    <th className="text-left p-6 text-violet-400/50">
                      Role
                    </th>
    
                    <th className="text-right p-6 text-violet-400/50">
                      Actions
                    </th>
                  </tr>
                </thead>
    
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-white/5 hover:bg-white/[0.02]"
                    >
                      <td className="p-6 text-white font-medium">
                        {user.name}
                      </td>
    
                      <td className="p-6 text-violet-400/70">
                        {user.email}
                      </td>
    
                      <td className="p-6">
                        <span
                          className={`
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            ${
                              user.role === 'Admin'
                                ? 'bg-violet-500/10 text-violet-400'
                                : 'bg-cyan-500/10 text-cyan-400'
                            }
                          `}
                        >
                          {user.role}
                        </span>
                      </td>
    
                      <td className="p-6">
                        <div className="flex justify-end gap-3">
                          <Button
                            size="sm"
                            variant="outline"
                          >
                            View
                          </Button>
    
                          <Button
                            size="sm"
                            variant="outline"
                          >
                            Edit
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </AdminLayout>
    );
};