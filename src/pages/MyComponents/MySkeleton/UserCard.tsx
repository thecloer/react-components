import type { FC } from 'react';
import type { User } from './MySkeleton.type';

type Props = User & {
  isSelected: boolean;
  onClick: (userId: number) => void;
};

const UserCard: FC<Props> = ({ id, username, name, email, onClick, isSelected }) => {
  return (
    <div
      className={`cursor-pointer rounded border px-2 py-1 shadow ${
        isSelected ? 'border-slate-400 bg-slate-200' : 'bg-slate-50 hover:bg-slate-100'
      }`}
      onClick={() => onClick(id)}
    >
      <h3 className='mb-2 font-medium'>{username}</h3>
      <div className='flex flex-col text-sm text-slate-600'>
        <span> {name}</span>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default UserCard;
