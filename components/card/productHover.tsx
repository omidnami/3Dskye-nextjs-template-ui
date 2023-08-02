import { useEffect, useState } from "react"
import { FaRegComment} from 'react-icons/fa'
import { AiOutlineLike} from 'react-icons/ai'
import { CardMedia, Skeleton } from "@mui/material";
export default function ProductHover(props:any) {
    const [imgOnload, setImgOnLoad] = useState(false);

    useEffect(() => {
        console.log(props.image);
        
    }, [])

    return(
        <div className="card-hover">
                                            <CardMedia
                                                component="img"
                                                image={props.image}
                                                alt="green iguana"
                                                onLoad={()=> setImgOnLoad(true)}
                                                className={`${!imgOnload&&'h-0'}`}
                                            />
                                            {
                                                !imgOnload && <Skeleton variant="rectangular" width={'100%'} height={'200px'} />
                                            }
            
            <div className="card-hover-push" >
                <h4>{props.title}</h4>
                <p>
                    <span className="comment">
                        <FaRegComment /> <small style={{paddingRight:'30px'}}>32</small>
                        <AiOutlineLike /> <small>32</small>
                    </span>
                    <span className="like"></span>
                </p>
            </div>
            
        </div>
    )
}