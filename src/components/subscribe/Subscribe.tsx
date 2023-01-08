import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

import styles from "./Subscribe.module.scss";

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FCD757",
            color: "#000000",
            transition: "all 0.3s ease-in-out",
            height: "7rem",
            width: "20rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            //onhover
            "&:hover": {
              backgroundColor: "#FC7A57",
            },
          }}
          onClick={handleClickOpen}
        >
          Subscribe and save
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </>
      <h1 className={styles.maintext}>
        “I haven't been everywhere, but it's on my list.”{" "}
        <span className={styles.credit}>- Some guy</span>
      </h1>
    </div>
  );
}
