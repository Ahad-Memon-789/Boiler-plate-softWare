import axios from "axios";
import { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Box, Button, Paper, Typography } from "@mui/material";
import AddProject from "./AddProject";
import { useNavigate, useParams } from "react-router-dom";
import { Del, Get, apiHandle } from "../config/helper/ApiHandling";
export default function Project() {
    let params = useParams()
    let [model, setModel] = useState<any>([])
    let getApi = () => {
        Get('comments')
            .then((res) => {
                // console.log(res.data)
                setModel([...res.data])
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useState(() => {

    })
    let navigate = useNavigate()
    let adddata = () => {
        navigate(`/AddProject`)
    }
    let onClickRoute = (id: any) => {
        navigate(`/AddProject/${id}`)
    }
    let deleteData = () => {
        Del(`comments/`, `${params.id}`)

            .then((res: any) => {
                console.log('delete data succesfully', res.data)
            }).catch((err: any) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getApi()
    }, [])
    return (<>
        <h1 className="text-center">View Data</h1>
        <Button variant="contained" onClick={adddata} color="success" className="mt-5 shadow rounded-0" endIcon={<AddTwoToneIcon />}>Add</Button>
        {model.map((x: any, i: any) => {
            return (

                <Box className="col-md-12 shadow rounded border my-5 py-5 px-5">
                    <Typography>PostId : {x.postId}</Typography>
                    <Typography>UserName : {x.name}</Typography>
                    <Typography>Description : {x.body}</Typography>
                    <Typography>UserEmail : {x.email}</Typography>
                    <Button variant="contained" color="primary" className="me-5 mt-5 shadow" startIcon={<EditIcon />} onClick={() => onClickRoute(x.id)}>Edit</Button>
                    <Button variant="contained" color="error" className="mt-5 shadow" onClick={deleteData} startIcon={<DeleteIcon />}>Delete</Button>
                </Box>
                // <h1>{x.name}</h1>
            )
        })}
    </>);
}