import type { Post, User } from './MySkeleton.type';
import { useEffect, useState } from 'react';
import UserCard from './UserCard';
import PostCard from './PostCard';
import UserCardSkeleton from './UserCardSkeleton';
import PostCardSkeleton from './PostCardSkeleton';

const MySkeleton = () => {
  const [delay, setDelay] = useState(2000);
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number>(1);

  useEffect(() => {
    setUsers([]);
    const timer = setTimeout(async () => {
      const usersData = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
      setUsers(usersData);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    setPosts([]);
    const timer = setTimeout(async () => {
      const userPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`).then((res) =>
        res.json()
      );
      setPosts(userPosts);
    }, delay);
    return () => clearTimeout(timer);
  }, [selectedUserId, delay]);

  return (
    <div className='card'>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Skeleton</h1>
        <div className='text-center text-lg'>
          <span className='mr-2'>Delay:</span>
          <input
            className='w-16 text-center focus:outline-none'
            type='number'
            min={0}
            step={100}
            value={delay}
            onChange={(e) => setDelay(isNaN(e.target.valueAsNumber) ? 0 : e.target.valueAsNumber)}
          />
        </div>
      </div>
      <div className='flex gap-8'>
        <section className='grow'>
          <h2 className='mb-4 border-b border-b-slate-300 pb-2 text-xl font-bold'>Posts</h2>
          <div className='h-[calc(100vh-20rem)] divide-y overflow-y-scroll'>
            {posts.length > 0
              ? posts.map((post) => (
                  <PostCard
                    key={post.id}
                    username={users.find((user) => user.id === selectedUserId)?.username ?? 'Unknown'}
                    {...post}
                  />
                ))
              : Array.from({ length: 4 }, (_, i) => <PostCardSkeleton key={i} />)}
          </div>
        </section>

        <section className='w-1/3 max-w-xs'>
          <h2 className='mb-4 border-b border-b-slate-300 pb-2 text-xl font-bold'>Users</h2>
          <div className='flex h-[calc(100vh-20rem)] flex-col gap-3 overflow-y-scroll'>
            {users.length > 0
              ? users.map((user) => (
                  <UserCard
                    isSelected={user.id === selectedUserId}
                    {...user}
                    key={user.id}
                    onClick={setSelectedUserId}
                  />
                ))
              : Array.from({ length: 3 }, (_, i) => <UserCardSkeleton key={i} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MySkeleton;
