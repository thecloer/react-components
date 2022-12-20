import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

function AppLayout() {
  return (
    <div className='min-h-screen flex flex-col bg-slate-200'>
      <Header />
      <div className='container grow mx-auto px-12 py-4 basis-1'>
        <div className='full flex'>
          <aside className='max-w-xs min-w-fit w-1/3 pr-6'>
            <Sidebar />
          </aside>
          <main className='grow h-full'>
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
