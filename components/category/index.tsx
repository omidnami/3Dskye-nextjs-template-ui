import { TreeView, TreeItem } from '@mui/lab';
import { HiChevronRight } from "react-icons/hi";
import { AiOutlineDown } from "react-icons/ai";
import { Skeleton } from '@mui/material';
import useFetch from '@/hooks/useFetch';
import { useEffect } from 'react';
import { Checkbox } from '@mui/joy';
export default function Category() {
    // useFetch connect axios for request to server ApiError
    // status = type number (response.status)
    // respons = type array (response.data)
    // postData = type function (request with POS method)
    // getData = type function (request with GET method)
    const {status, response, getData} = useFetch();

    useEffect(() => {
        console.log('reload fetch data....');
        getData('/data/cats.json', null)
        console.log(status, response);
        
    },[])

    return (
        <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<AiOutlineDown />}
        defaultExpandIcon={<HiChevronRight />}
        sx={{ flexGrow: 1 }}
        >

                            {
                                !response.length ? Array.from(Array(5), (v,i)=> {
                                    return ( 
                                        <Skeleton key={i} width={'95%'} height={15}  sx={{marginBottom:'12px'}} />    
                                    )
                                    }): response.map((item:any) => {
                                        return (
                                            <TreeItem key={item.id} nodeId={item.id} label={item.title} sx={{marginBottom:'12px'}}>
                                                    {
                                                        item.sub.map((s:any, n:any) => {
                                                            return (
                                                                <Checkbox sx={{width:'100%',marginTop:'12px'}} key={n} label={s.title} value={s.id} />
                                                            )
                                                        })
                                                    }
                                                    
                                            </TreeItem>
                                        )
                            })}
            
        </TreeView>       
    )
}