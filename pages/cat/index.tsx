import { Button, Card, CardContent, CardMedia, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { FaRegComment} from 'react-icons/fa'
import { AiOutlineLike} from 'react-icons/ai'

import img from '../../public/testcard/5502267.64c041d21c5be.jpeg'
import Link from "next/link";
export default function Cat() {
    return (
        <main>
            <Container>
                <Grid container spacing={3}>
                <Grid item sm={0} md={3} lg={2.5}></Grid>
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
                                <Grid xs={6} sm={4} md={3} lg={2.4}>
                                    <Card sx={{margin:'4px',padding:'4px',marginBottom:'30px'}} variant="outlined">
                                        <CardMedia
                                        component="img"
                                        image={img.src}
                                        alt="green iguana"
                                        />
                                        <CardContent style={{padding:0}}>
                                            <Typography gutterBottom variant="h3" component="h3">
                                                <Link href={'/'}>Lizard</Link>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <span style={{paddingRight:'15px'}} className="text-success mr-5">Pro </span>
                                                <span className="comment">
                                                    <FaRegComment /> <small style={{paddingRight:'30px'}}>32</small>
                                                    <AiOutlineLike /> <small>32</small>
                                                </span>
                                                <span className="like"></span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid> 

                                <Grid xs={6} sm={4} md={3} lg={2.4}>
                                    <Card sx={{margin:'4px',padding:'4px',marginBottom:'30px'}} variant="outlined">
                                        <CardMedia
                                        component="img"
                                        image={img.src}
                                        alt="green iguana"
                                        />
                                        <CardContent style={{padding:0}}>
                                            <Typography gutterBottom variant="h3" component="h3">
                                                <Link href={'/'}>Lizard</Link>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <span style={{paddingRight:'15px'}} className="text-success mr-5">Pro </span>
                                                <span className="comment">
                                                    <FaRegComment /> <small style={{paddingRight:'30px'}}>32</small>
                                                    <AiOutlineLike /> <small>32</small>
                                                </span>
                                                <span className="like"></span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid> 

                                <Grid xs={6} sm={4} md={3} lg={2.4}>
                                    <Card sx={{margin:'4px',padding:'4px',marginBottom:'30px'}} variant="outlined">
                                        <CardMedia
                                        component="img"
                                        image={img.src}
                                        alt="green iguana"
                                        />
                                        <CardContent style={{padding:0}}>
                                            <Typography gutterBottom variant="h3" component="h3">
                                                <Link href={'/'}>Lizard</Link>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <span style={{paddingRight:'15px'}} className="text-success mr-5">Pro </span>
                                                <span className="comment">
                                                    <FaRegComment /> <small style={{paddingRight:'30px'}}>32</small>
                                                    <AiOutlineLike /> <small>32</small>
                                                </span>
                                                <span className="like"></span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid> 

                                <Grid xs={6} sm={4} md={3} lg={2.4}>
                                    <Card sx={{margin:'4px',padding:'4px',marginBottom:'30px'}} variant="outlined">
                                        <CardMedia
                                        component="img"
                                        image={img.src}
                                        alt="green iguana"
                                        />
                                        <CardContent style={{padding:0}}>
                                            <Typography gutterBottom variant="h3" component="h3">
                                                <Link href={'/'}>Lizard</Link>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <span style={{paddingRight:'15px'}} className="text-success mr-5">Pro </span>
                                                <span className="comment">
                                                    <FaRegComment /> <small style={{paddingRight:'30px'}}>32</small>
                                                    <AiOutlineLike /> <small>32</small>
                                                </span>
                                                <span className="like"></span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid> 

                                <Grid xs={6} sm={4} md={3} lg={2.4}>
                                    <Card sx={{margin:'4px',padding:'4px',marginBottom:'30px'}} variant="outlined">
                                        <CardMedia
                                        component="img"
                                        image={img.src}
                                        alt="green iguana"
                                        />
                                        <CardContent style={{padding:0}}>
                                            <Typography gutterBottom variant="h3" component="h3">
                                                <Link href={'/'}>Lizard</Link>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <span style={{paddingRight:'15px'}} className="text-success mr-5">Pro </span>
                                                <span className="comment">
                                                    <FaRegComment /> <small style={{paddingRight:'30px'}}>32</small>
                                                    <AiOutlineLike /> <small>32</small>
                                                </span>
                                                <span className="like"></span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid> 

                                <Grid className="css-card" style={{position:'relative'}} xs={6} sm={4} md={3} lg={2.4}>
                                    <Card sx={{margin:'4px',padding:'4px',marginBottom:'30px'}} variant="outlined">
                                        <Link className='img' href={'/'}>
                                            <CardMedia
                                            component="img"
                                            image={img.src}
                                            alt="green iguana"
                                            />
                                        </Link>
                                        <ul className="dot-nav">
                                            <li className="active pointer"><span></span></li>
                                            <li className="pointer"><span></span></li>
                                            <li className="pointer"><span></span></li>
                                            <li className="pointer"><span></span></li>
                                        </ul>
                                        <CardContent style={{padding:0}}>
                                            <Typography gutterBottom variant="h3" component="h3">
                                                <Link href={'/'}>Lizard</Link>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <span style={{paddingRight:'15px'}} className="text-success mr-5">PRO </span>
                                                <span className="comment">
                                                    <FaRegComment /> <small style={{paddingRight:'30px'}}>32</small>
                                                    <AiOutlineLike /> <small>32</small>
                                                </span>
                                                <span className="like"></span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    
                                    <Card className="hover-card" sx={{margin:'4px',padding:'4px',marginBottom:'30px',boxShadow:'1px 1px 12px silver',
                                    position:'fixed',top:'35px',zIndex:99999999,right:'25%',minWidth:'35vw'}}>
                                        <CardMedia
                                        component="img"
                                        image={img.src}
                                        alt="green iguana"
                                        />
                                        <CardContent style={{padding:0}}>
                                            <Typography gutterBottom variant="h3" component="h3">
                                                <Link href={'/'}>Lizard</Link>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <span style={{paddingRight:'15px'}} className="text-success mr-5">PRO </span>
                                                <span className="comment">
                                                    <FaRegComment /> <small style={{paddingRight:'30px'}}>32</small>
                                                    <AiOutlineLike /> <small>32</small>
                                                </span>
                                                <span className="like"></span>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid> 
                            </Grid>
                        </section>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}