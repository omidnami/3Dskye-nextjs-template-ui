import { Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, Grid, MenuItem, Pagination, Select, Skeleton, Stack } from "@mui/material";
import { TreeView, TreeItem } from '@mui/lab';



import CatCard from "../../components/card/CatCard";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import { HiChevronRight } from "react-icons/hi";
import { AiOutlineDown } from "react-icons/ai";

export default function Cat() {

    // useFetch connect axios for request to server ApiError
    // status = type number (response.status)
    // respons = type array (response.data)
    // postData = type function (request with POS method)
    // getData = type function (request with GET method)
    const {status, response, getData} = useFetch();

    useEffect(() => {
        console.log('reload fetch data....');
        getData('/data/models.json', null)
        console.log(status, response);
        
    },[])
    
    return (
        <main>
            <Container>
                <Grid container spacing={3}>
                <Grid item sm={0} md={3} lg={2.5}>
                <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<AiOutlineDown />}
                defaultExpandIcon={<HiChevronRight />}
                sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                >
                    <TreeItem nodeId="1" label="Applications">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel required control={<Checkbox />} label="Required" />
                        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                    </FormGroup>
                    </TreeItem>
                    
                </TreeView>
                </Grid>



                    <Grid item sm={12} md={9} lg={9.5}>
                        <nav>
                        <Button sx={{marginRight:'20px',minWidth:'80px'}} variant="outlined" size="medium">
                            Pro
                        </Button>
                        <Button sx={{marginRight:'20px',minWidth:'80px'}} variant="outlined" size="medium">
                            Free
                        </Button>
                        <FormControlLabel sx={{marginRight:'20px'}} control={<Checkbox />} 
                        label="Label" />
                        <FormControl className="sort">
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={10}
                                label="Age"
                                onChange={()=> alert('changed')}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <Button sx={{float:'right'}} variant="outlined" size="medium">
                            Upload model
                        </Button>
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
                            <Button variant="outlined" sx={{width:"100%"}} size="large">
                                Large
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

