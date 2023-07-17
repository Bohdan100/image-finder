import { FC } from "react";
import { Skeleton, Box } from "@mui/material";

export const Loader: FC = () => (
  <>
    <Box sx={{ display: "flex", gap: 2, mb: 3, mt: 4 }}>
      <Skeleton variant="circular" width={60} height={60} />
      <Box>
        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem", width: "50vw", mb: 1 }}
        />
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "30vw" }} />
      </Box>
    </Box>
    <Skeleton
      variant="rounded"
      sx={{ width: "100vw", height: "30vh", mb: 3 }}
    />
    <Skeleton variant="text" sx={{ fontSize: "1rem", width: "90vw", mb: 1 }} />
    <Skeleton variant="text" sx={{ fontSize: "1rem", width: "70vw" }} />
  </>
);
