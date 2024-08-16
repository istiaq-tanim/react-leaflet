import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import Loader from './component/Loader';

export default function Home() {
  const Map = useMemo(() => dynamic(
    () => import('@/app/component/map'),
    {
      loading: () => <Loader></Loader>,
      ssr: false
    }
  ), [])
  return (
    <div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px]">
      <Map posix={[4.79029, -75.69003]} />
    </div>
  );
}
