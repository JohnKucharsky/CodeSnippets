import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { paths, titles } from "src/utils/common.ts";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleChangePath = (event: SelectChangeEvent) => {
    if (event.target.value === paths.javascript) {
      navigate("/");
      return;
    }
    navigate(event.target.value);
  };

  console.log(location.pathname);

  return (
    <>
      <FormControl variant="standard" sx={{ minWidth: 120 }}>
        <Select
          variant={"outlined"}
          value={location.pathname}
          onChange={handleChangePath}
        >
          {(["/", paths.typescript, paths.react] as const).map((item) => (
            <MenuItem key={item} value={item}>
              <Typography
                color={(theme) => theme.palette.text.primary}
                variant={"h5"}
              >
                {titles[item]}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
