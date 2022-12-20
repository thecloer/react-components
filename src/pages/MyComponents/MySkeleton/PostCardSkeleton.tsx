import SkeletonLine from './SkeletonLine';

const PostCardSkeleton = () => {
  return (
    <div className='px-2 py-4'>
      <div className='mb-2 w-3/5'>
        <SkeletonLine />
      </div>
      <div className='flex flex-col gap-1'>
        <SkeletonLine />
        <SkeletonLine />
        <div className='w-11/12'>
          <SkeletonLine />
        </div>
      </div>
    </div>
  );
};

export default PostCardSkeleton;
