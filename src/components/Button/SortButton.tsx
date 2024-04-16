import { SortButtonProps } from "@/interfaces/Button";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SortButton: React.FC<SortButtonProps> = ({ sortMode, onSortChange }) => {
    return(
        <Box display={"flex"} alignItems={"baseline"}>
        <Typography variant="body1" sx={{ marginRight: 1 }}>
          Sorted by Latest Update time:
        </Typography>
        <Typography variant="body1" sx={{ marginRight: 1, fontWeight: "bold" }}>
          {sortMode === "asc" ? "Ascending" : "Descending"}
        </Typography>
        <IconButton onClick={()=> onSortChange(sortMode === "asc" ? "desc" : "asc")} size="medium" sx={{
            alignItems: "center",
        }}>
        {/* <ArrowDropUpIcon /> */}
        {sortMode === "asc" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </IconButton>
    </Box>
    )
}

export default SortButton;