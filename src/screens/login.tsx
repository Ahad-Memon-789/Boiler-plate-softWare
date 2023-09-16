import { Box, Button, Paper, TextField } from "@mui/material"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Login() {
    return (<>
        <Box className="d-flex align-items-center justify-content-center" sx={{ backgroundColor: 'darkcyan', height: "100vh" }}>
            <Paper sx={{ marginX: "auto", textAlign: 'center', backgroundColor: 'lightsteelblue', color: 'darkolivegreen' }} className="col-md-4 shadow rounded border my-5 py-5 px-5 ">
                <h2 className="mt-0 mb-5">LOGIN</h2>
                
                <TextField id="filled-basic" label="UserName" placeholder="UserName" className="mb-3" variant="outlined" />
                
                <TextField id="filled-basic" label="UserEmail" placeholder="UserEmail" className="mb-3" variant="outlined" />
               
                <TextField
                    id="outlined-textarea"
                    // label="Enter Description"
                    label="DESCRIPTION"
                    placeholder="DESCRIPTION"
                    multiline
                    rows={4}
                />
                  <br />    
                <Button variant="outlined" className="mt-5" color="inherit">LOGIN</Button>

            </Paper>
        </Box>
    </>)
}