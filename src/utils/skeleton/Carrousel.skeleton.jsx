import { Skeleton } from "@mui/material";

export const CarrouselSkeleton = () => {
  return (
    <div style={{ width: '100%', position: 'relative', paddingTop: `${(41 / 138) * 100}%` }}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};
