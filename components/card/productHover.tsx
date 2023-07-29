import { useEffect } from "react"
import { FaRegComment} from 'react-icons/fa'
import { AiOutlineLike} from 'react-icons/ai'
export default function ProductHover(props:any) {
    useEffect(() => {
        console.log(props.image);
        
    }, [])

    return(
        <div className="card-hover">
            <img className="card-hover-img" src={props.image} />
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