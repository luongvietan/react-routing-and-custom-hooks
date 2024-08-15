import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

function TodoDetails({todoDetail, openDialog, setOpenDialog, setTodoDetail}) {
    return (
        <Fragment>
            <Dialog onClose={()=>setOpenDialog(false)} open={openDialog}>
                <DialogTitle>
                    {todoDetail?.todo}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => {
                        setTodoDetail(null)
                        setOpenDialog(false);
                    }}>Close</Button>
                </DialogActions>
            </Dialog>
        </Fragment>)
}
export default TodoDetails