import { Box, Button, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Get, Put, apiHandle } from "../config/helper/ApiHandling";

export default function AddProject() {
    let params = useParams()
    let [model, setModel] = useState<any>({})
    let [ownObject, setOwnObject] = useState<any>({})
    let postData = () => {
        ownObject.postId = 101
        axios.post('https://jsonplaceholder.typicode.com/comments', ownObject).then((res: any) => {
            console.log('datapostsuccess', res.data)
            setOwnObject({ ...res.data })
        }).catch((err: any) => {
            console.log(err.message)
        })
    }
    let getPostById = () => {
        Get(`comments/${params.id}`, ownObject).then((res: any) => {
            console.log(res.data)
            setOwnObject({ ...res.data })
        }).catch((err: any) => {
            console.log(err)
        })
    }
    let updateDataWhichgetAbove = () => {
        Put(`comments/${params.id}`, model).then((res: any) => {
            console.log('update data successfully', res.data)
        }).catch((err: any) => {
            console.log(err.message)
        })
    }
    useEffect(() => { getPostById() }, [])
    return (<>
        <Box >
            <Paper sx={{ marginX: "auto", textAlign: 'center', backgroundColor: 'GrayText', color: 'white' }} className="col-md-3 shadow rounded border my-5 py-5 px-5 ">
                <h2 className="mt-0 mb-5">ADD DATA</h2>
                Enter Name :
                <TextField id="filled-basic" placeholder="UserName" value={ownObject.name} className="mb-3" onChange={(e) => { setOwnObject({ ...ownObject, name: e.target.value }) }} variant="outlined" />
                Enter Email :
                <TextField id="filled-basic" placeholder="UserEmail" value={ownObject.email} className="mb-3" variant="outlined" onChange={(e) => { setOwnObject({ ...ownObject, email: e.target.value }) }} />
                Enter Description :
                <TextField
                    defaultValue={ownObject.body}
                    id="outlined-textarea"
                    // label="Enter Description"
                    placeholder="DESCRIPTION"
                    multiline
                    rows={4}
                    onChange={(e) => { setOwnObject({ ...ownObject, body: e.target.value }) }}
                />
                {params.id ?
                    (<Button variant="outlined" className="mt-5" color="inherit" onClick={updateDataWhichgetAbove}>Update</Button>) : (<Button variant="outlined" className="mt-5" color="inherit" onClick={postData}>ADD</Button>)
                }
            </Paper>
        </Box>
    </>)
}