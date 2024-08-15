import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

function todoDetail(todoDetail, openDialog, setOpenDialog, setTodoDetail) {
    return <Fragment>
        <Dialog onClose={()=>{setOpenDialog(false)}} open={openDialog}>
            <DialogTitle>
                {todoDetail?.todo}
            </DialogTitle>
            <DialogActions>
                <Button onClose={() => {
                    setOpenDialog(false);
                    setTodoDetail(null)
                }}>Close</Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}
export default todoDetail