import { Card, CardActions, CardContent, Typography, Button } from "@mui/material";

function TodoItem({ todo, fetchDetail }) {
    console.log(todo);
    return <Card sx={{
        maxWidth: 850,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }}>
        <CardContent>
            <Typography variant='h5' color={'text.secondary'} fontSize='20px'>
                {todo?.todo}
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={() => {
                fetchDetail(todo?.id)
            }} sx={{
                background: 'black',
                color: 'white',
                '&:hover': {
                    background: 'black',
                    color: 'white',
                    opacity: '0.75',
                },
            }}>Show Details</Button>
        </CardActions>
    </Card>
}
export default TodoItem
