import { Container, FormControl, Grid, MenuItem, Pagination, Select, Skeleton, Stack, SwipeableDrawer } from "@mui/material";



import CatCard from "../../components/card/CatCard";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import Category from "../../components/category";
import Attribute from "../../components/attr";
import { Button, Checkbox } from "@mui/joy";
import { GiSettingsKnobs } from "react-icons/gi";
import SwipeableTemporaryDrawer from "../../components/drower";


export default function Cat() {

    // useFetch connect axios for request to server ApiError
    // status = type number (response.status)
    // respons = type array (response.data)
    // postData = type function (request with POS method)
    // getData = type function (request with GET method)
    const {status, response, getData} = useFetch();

    useEffect(() => {
        getData('/data/models.json', null)
        
    },[])
    
    return (
        <main>
            <Container>
            <div style={{position:'absolute',left:'30px',top:'90px'}} className="d-md-none mt-4">
            <SwipeableTemporaryDrawer
                icon={<span style={{marginLeft:'12px'}}><GiSettingsKnobs /></span>}
                title="Filter"
            >
            </SwipeableTemporaryDrawer>

            <Button variant="plain" color="neutral">Clear</Button>
            </div>
            

                <Grid container spacing={3}>
                <Grid className="d-none d-md-block" item sm={0} md={2.5} lg={2}>
                    <Category />
                    <Attribute />
                </Grid>



                    <Grid item sm={12} md={9} lg={9.5}>
                        <nav>
                            <Button sx={{marginRight:'20px',minWidth:'80px'}} variant="outlined"  color="neutral">
                                Pro
                            </Button>
                            <Button sx={{marginRight:'20px',minWidth:'80px'}} variant="outlined" color="neutral">
                                Free
                            </Button>
                        <Button sx={{float:'right'}} variant="outlined" color="neutral">
                            Upload model
                        </Button>

                        <div className="d-md-none mt-4"></div>

                        <Checkbox value="" label="From manufacturers" />

                        <FormControl className="sort" sx={{float:'right'}}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={10}
                                label="Age"
                                onChange={()=> alert('changed')}
                                sx={{marginTop:"-7px"}}
                            >
                                <MenuItem value={10}> Newest </MenuItem>
                                <MenuItem value={20}> Top </MenuItem>
                            </Select>
                        </FormControl>
                       
                        </nav>
                        <p>1450 models fund</p>
                        {/* content list model grid */}
                        <section className="section-cat-cart">
                            <Grid container spacing={0}>

                                {
                                !response.length ? Array.from(Array(20), (v,i)=> {
                                    return ( 
                                        <Grid key={i} item className="css-card" style={{position:'relative'}} xs={6} sm={4} md={3} lg={2.4}> 
                                        <div style={{margin:'8px'}}>
                                        <Skeleton variant="rectangular" width={'100%'} height={'200px'} />
                                        <Skeleton width={'60%'} />
                                        </div>
                                    </Grid>
    
                                    )
                                    }): response.map((item:any) => {
                                        return (
                                            <Grid key={item.id} item className="css-card" style={{position:'relative'}} xs={6} sm={4} md={3} lg={2.4}> 
                                                    <CatCard img={item.img} id={item.id} />
                                            </Grid> 
                                        )
                                })}
                                

                            </Grid>
                            <Stack spacing={2} sx={{textAlign:"center",marginTop:"30px"}}>
                            <Button variant="outlined" sx={{width:"100%"}} color="neutral">
                            Next Page
                            </Button>

                            <Pagination count={45810} shape="rounded" />
                            </Stack>
                        </section>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

