import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "../css/demo.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(shortcut, work) {
  return { shortcut, work };
}

const rows = [
  createData("CTRL+SPACE", "It helps to turn ON & OFF suggestions of vscode"),
  createData("CTRL+/", "It helps to make single or multiple line comments"),
  createData("CTRL+P", "It helps to open files of current folder"),
  createData(
    "CTRL+SHIFT+L",
    "It helps to select all the text of single text selected by you"
  ),
  createData("CTRL+B", "Toggle Sidebar ON & OFF"),
  createData("CTRL+^ || CTRL+▼", "Move current text UP and DOWN"),
  createData("CTRL+O", "to open project"),
  createData("CTRL+D", "select a similiar text one by one"),
  createData("CTRL+SHIFT+E", "get Exact path of file"),
  createData("CTRL+X", "delete current Line"),
  createData(
    "CTRL+C",
    "just place your keyboad arrow to current line to copy the line"
  ),
  createData("CTRL+B", "Toggle Sidebar ON & OFF"),

  createData(
    "SHIFT+ALT+^ || SHIFT+ALT+▼",
    "to dublicate current line up and down"
  ),
  createData("CTRL+^ || CTRL+▼", "Move current text UP and DOWN"),
  createData("CTRL+J || CTRL+`", "to open terminal"),
  createData("CTRL+,", "to open setting"),
  createData("SHIFT+ALT+F", "format select text or line"),
];

// basic
const basics = [
  createData("SHIFT+TAB", "one step back indent"),
  createData("CTRL+C", "copy line"),
  createData("CTRL+x", "cut line"),
  createData("CTRL+^ || CTRL+▼", "Move current text UP and DOWN"),
  createData("CTRL+SHIFT+K", "Its helps to delete selected line"),
  createData("ENTER", "insert new line below"),
  createData("CTRL+SHIFT+ENTER", "insert new line above"),
  createData("CTRL+H", "replace text"),
  createData("CTRL+/", "toggle line comment"),
  createData("SHIFT+ALT+A", "make comment with comment present inside"),
  createData("ALT+A", "toggle word wrap"),
  createData("TAB", "select text and press tab to give indent to text"),
  createData("ALT+MOUSE CLICK", "write at multiple place from single place"),
];

// navigation

const navi = [
  createData("CTRL+SHIFT+`", "open NEW terminal"),
  createData("CTRL+SHIFT+M", "open problem panel"),
  createData("CTRL+P", "go to file"),
];

// file mangement
const filem = [
  createData("CTRL+N", "new file"),
  createData("CTRL+O", "open file"),
  createData("CTRL+S", "save"),
  createData("CTRL+SHIFT+S", "save As"),
  createData("CTRL+SHIFT+T", "reopen closed file"),
  createData("CTRL+TAB", "toggle next open files"),
  createData("CTRL+SHIFT+TAB", "toggle previous open files"),
];

// display
const dis = [
  createData("CTRL+/-", "zoom in/out"),
  createData("CTRL+B", "show sidebar"),
  createData("CTRL+SHIFT+F", "show search"),
  createData("CTRL+SHIFT+X", "show extension bar"),
  createData("CTRL+SHIFT+D", "show debug"),
  createData("CTRL+SHIFT+U", "show output panel"),
  createData("CTRL+SHIFT+G", "show source control"),
];
export default function Tables() {
  const mystyle = {
    marginTop: "50px",
    textTransform:"capitalize"
  };
  const classes = useStyles();
  return (
    <>
      <div className="tables">
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>SHORTCUT KEY</TableCell>
                <TableCell align="right">WHAT CAN DO?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.shortcut}>
                  <TableCell component="th" scope="row">
                    {row.shortcut}
                  </TableCell>
                  <TableCell align="right">{row.work}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <h2 style={mystyle}>BASIC EDITING</h2>

        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>SHORTCUT KEY</TableCell>
                <TableCell align="right">WHAT CAN DO?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basics.map((row) => (
                <TableRow key={row.shortcut}>
                  <TableCell component="th" scope="row">
                    {row.shortcut}
                  </TableCell>
                  <TableCell align="right">{row.work}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <h2 style={mystyle}>NAVIGATION</h2>

        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>SHORTCUT KEY</TableCell>
                <TableCell align="right">WHAT CAN DO?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {navi.map((row) => (
                <TableRow key={row.shortcut}>
                  <TableCell component="th" scope="row">
                    {row.shortcut}
                  </TableCell>
                  <TableCell align="right">{row.work}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <h2 style={mystyle}>FILE MANAGEMENT</h2>

        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>SHORTCUT KEY</TableCell>
                <TableCell align="right">WHAT CAN DO?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filem.map((row) => (
                <TableRow key={row.shortcut}>
                  <TableCell component="th" scope="row">
                    {row.shortcut}
                  </TableCell>
                  <TableCell align="right">{row.work}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <h2 style={mystyle}>DISPLAY</h2>

        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>SHORTCUT KEY</TableCell>
                <TableCell align="right">WHAT CAN DO?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dis.map((row) => (
                <TableRow key={row.shortcut}>
                  <TableCell component="th" scope="row">
                    {row.shortcut}
                  </TableCell>
                  <TableCell align="right">{row.work}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
