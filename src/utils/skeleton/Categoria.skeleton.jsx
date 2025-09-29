import { Skeleton } from "@mui/material";

export const CategoriaSkeleton = () => {
  return (
    <div className="flex-col gap-2">
      <Skeleton variant="rectangular" height={176} width={176} />
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} width={176} />
    </div>
  );
};
