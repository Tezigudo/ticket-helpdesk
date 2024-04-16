import { SortButtonProps } from "@/interfaces/Button";
import { Sort } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const SortButton: React.FC<SortButtonProps> = ({ sortMode, onSortChange }) => {
    return(
        <Box>
        <Typography variant="body1" sx={{ marginRight: 1 }}>
          Sorted by:
        </Typography>
        <Typography variant="body1" sx={{ marginRight: 1, fontWeight: "bold" }}>
          {sortMode === "asc" ? "Ascending" : "Descending"}
        </Typography>
        <IconButton onClick={()=> onSortChange(sortMode === "asc" ? "desc" : "asc")} size="large">
          <Sort />
        </IconButton>
    </Box>
    )
}

export default SortButton;