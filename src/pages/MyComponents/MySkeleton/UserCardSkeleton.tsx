import SkeletonLine from './SkeletonLine';

const UserCardSkeleton = () => {
  return (
    <div className='cursor-pointer rounded border bg-slate-50 px-2 py-3 shadow'>
      <div className='mb-2 w-3/5'>
        <SkeletonLine />
      </div>
      <div className='flex flex-col gap-1'>
        <SkeletonLine />
        <SkeletonLine />
      </div>
    </div>
  );
};

export default UserCardSkeleton;
