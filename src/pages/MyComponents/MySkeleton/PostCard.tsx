import type { FC } from 'react';
import type { Post } from './MySkeleton.type';

type Props = Post & {
  username: string;
};

const PostCard: FC<Props> = ({ title, body, username }) => {
  return (
    <div className='px-2 py-4 '>
      <h3 className='mb-2 text-lg font-bold'>{title}</h3>
      <span className='mb-1 font-semibold text-slate-700'>{username}</span>
      <p className='text-slate-600'> {body}</p>
    </div>
  );
};

export default PostCard;
