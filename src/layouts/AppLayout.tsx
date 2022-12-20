import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

function AppLayout() {
  return (
    <div className='flex min-h-screen flex-col bg-slate-200'>
      <Header />
      <div className='container mx-auto grow basis-1 py-4 px-4'>
        <div className='full flex'>
          <aside className='hidden w-1/3 pr-6 sm:block'>
            <Sidebar />
          </aside>
          <main className='h-full grow'>
            <div className='send-box'>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
