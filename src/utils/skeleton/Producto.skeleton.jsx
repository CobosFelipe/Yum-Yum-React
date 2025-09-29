import { Skeleton } from "@mui/material";

export const ProductoSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-sm">
      <Skeleton className="shadow-md rounded-2xl" variant="rectangular" width={256} height={256} />
      <Skeleton className="flex flex-col w-55 -mt-10 overflow-hidden min-h-[6rem] bg-white rounded-lg shadow-lg" variant="rectangular" width={218} height={78} />
    </div>
  );
};
