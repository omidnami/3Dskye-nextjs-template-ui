import useFetch from "@/hooks/useFetch";
import Icons from "@/libs/Icons";
import { Checkbox } from "@mui/joy";
import { FormControlLabel, FormGroup, Grid, Skeleton, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Attribute() {
    // useFetch connect axios for request to server ApiError
    // status = type number (response.status)
    // respons = type array (response.data)
    // postData = type function (request with POS method)
    // getData = type function (request with GET method)
    const {status, response, getData} = useFetch();

    useEffect(() => {
        getData('/data/attr.json', null)
        
    },[])

    return (
        <>
                            {
                                !response.length ? Array.from(Array(6), (v,i)=> {
                                    return ( 
                                    <Typography key={i}>
                                        <Skeleton width={'50%'} height={20}  sx={{marginBottom:'12px',marginTop:"30px"}} />    
                                        <Skeleton width={'70%'} height={10}  sx={{marginTop:"30px"}} />    
                                        <Skeleton width={'70%'} height={10}  sx={{marginTop:"30px"}} />    
                                        <Skeleton width={'70%'} height={10}  sx={{marginTop:"30px"}} />    
                                    </Typography>
                                    )
                                    }): response.map((item:any) => {
                                        return (
                                            <>
                                            <h5 key={item.id} className="filter-cat" style={{marginTop:"30px"}}>{item.title}</h5>
                                            <Grid container spacing={1}>
                                                    {
                                                        item.data.map((d:any, n:any) => {
                                                            
                                                                    if (item.type === 'color') {
                                                                        return (
                                                                            
                                                                                <Grid key={d.id} item xs={3}>
                                                                                <div className="color-attr pointer" style={{width:'26px',height:'26px',background:d.title,flex:1,borderRadius:'50%',color:d.title,border:'1px solid silver'}}></div>
                                                                                </Grid>
                                                                            
                                                                        )
                                                                    }
                                                                    if (item.type === 'icon') {
                                                                        return (
                                                                            <Grid key={d.id} item xs={3}>
                                                                                    <Icons className="pointer hover-svg" icon={d.title} />
                                                                            </Grid>
                                                                        )
                                                                    }
                                                                    return (
                                                                        <Grid key={d.id} item xs={12} className="checking">
                                                                        
                                                                            <Checkbox label={d.title}  />
                                                                        </Grid>
                                                                    )
                                                        })
                                                    }
                                                    </Grid>
                                                   </> 

                                               
                                        )
                            })}
        </>
    )
}