import { Box, Card, CardContent, CardMedia, Popper, Skeleton, Typography } from "@mui/material";
import { FaRegComment} from 'react-icons/fa'
import { AiOutlineHeart, AiOutlineLike, AiOutlineRight} from 'react-icons/ai'

import img from '../../public/testcard/5502267.64c041d21c5be.jpeg'
import Link from "next/link"
import React, { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";

interface DataModelsInter {
    img : Array<string>,
    cat : Array<String>,
    id : Number,
    title : string
}
export default function CatCard(props:any) {

    // useFetch connect axios for request to server ApiError
    // status = type number (response.status)
    // respons = type array (response.data)
    // postData = type function (request with POS method)
    // getData = type function (request with GET method)
    const {status, response, getData} = useFetch();
    const [imgOnload, setImgOnLoad] = useState(false);
    const [dataModel, setDatamodel] = useState({});
    const [count, setCount] = useState(0);
    const [hover, setHover] = useState(false)


    const handleSlider = () => {
        
        if (response.img && response.img.length <= count+1) {
             setCount(0)
        }else {
            setCount(count+1)
        }
        
    }

    const mouseOverHandle = async (event:Number) => {
        
        
        
    }

    useEffect(() => {
        setDatamodel(response)
    },[response])


    //popper
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setHover(true)
        await getData('/data/modelData.json', null)

      };
      const MouseLive = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(null);
        setHover(false)
         setDatamodel({})
        
      };
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popper' : undefined;
    return (
                                    <Card sx={{margin:'4px',padding:'4px',marginBottom:'30px'}} variant="outlined">
                                        <div className="img-box"
                                                onMouseEnter={handleClick}
                                                onMouseLeave={MouseLive}
                                        >
                                        <Link className='img' href={'/'}>
                                        <CardMedia
                                                component="img"
                                                image={props.img}
                                                alt="green iguana"
                                                onLoad={()=> setImgOnLoad(true)}
                                                className={`${!imgOnload&&'h-0'}`}
                                                //onMouseOver={() => mouseOverHandle(props.id)}
                                                aria-describedby={id}
                                                
                                            />
                                            {
                                                !imgOnload && <Skeleton variant="rectangular" width={'100%'} height={'200px'} />
                                            }
                                            

                                            </Link>
                                            {
                                                hover && <>
                                            {/* <ul className="dot-nav">
                                                <li className="active pointer"><span></span></li>
                                                <li className="pointer"><span></span></li>
                                                <li className="pointer"><span></span></li>
                                                <li className="pointer"><span></span></li>
                                            </ul> */}
                                            <i><AiOutlineHeart /></i>
                                            <i className="arow" onClick={() => handleSlider()}><AiOutlineRight /></i>
                                            </>
                                            }
                                        </div>
                                        <Popper id={id} open={open} anchorEl={anchorEl} placement="right">
                                            <HoverCatCart slideCount={count} data={dataModel} img={props.img} loadImg={imgOnload}/>
                                        </Popper>
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

    )
}

function HoverCatCart(props:any) {
    const [imgOnload, setImgOnLoad] = useState(false);
    const [slider, setSlider] = useState(0)
    //const { data = } } = props



    return (
                                <Card className="hover-card" sx={{margin:'4px',padding:'4px',marginBottom:'30px',boxShadow:'1px 1px 12px silver',
                                    zIndex:99999999,minWidth:'35vw'}}>
                                                {
                                                    
                                                    !props.data.img ? <Skeleton variant="rectangular" width={'100%'} height={'200px'} />
                                                    :
                                                    props.data.img?.map( (item:any, i:any) => (
                                                    <Item dis={i===props.slideCount?'':'d-none'} key={i} img={item} />
                                                     ) )
                                                    
                                                }
                                                
                                        <CardContent style={{padding:0}}>
                                            <Typography gutterBottom variant="h3" component="h3">
                                                {!props.data.title?<Skeleton width={'60%'} />:<Link href={'/'}>
                                                    {props.data.cat.map((item:any, i:any) => {
                                                       return <span key={i}>{item} / </span>
                                                    })}
                                                      data.title
                                                </Link>}
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
    )
}

function Item(props:any)
{    const [imgOnload, setImgOnLoad] = useState(false);

    return (
        <>
            <CardMedia
            component="img"
            image={props.img}
            alt="green iguana"
            onLoad={()=> setImgOnLoad(true)}
            className={props.dis}
            />

            {
                    !imgOnload && <Skeleton variant="rectangular" width={'100%'} height={'80%'}  />
            }
        </>

    )
}