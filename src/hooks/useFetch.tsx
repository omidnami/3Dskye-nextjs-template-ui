import { useState } from "react"
import axios from "axios"

const useFetch = () => {
       const [response, setResponse] = useState([])
       const [status, setStatus] = useState(0)

    const postData = async(api='', data=null) => {
        console.log('start post fetching')
        
        await axios.post(api, data).then((result:any) => {
            setResponse(result)
            setStatus(200)
        }).catch((err) => {
             setResponse(err.message)
             setStatus(err.response.status)
        })
    }

    const getData = async(api='', data=null) => {
        await axios.get(api, { params:data }).then((result:any) => {
            setResponse(result.data)
            setStatus(result.status)
        }).catch((err) => {
            setResponse(err.message)
            setStatus(err.response.status)
        })
    }

    return {response, status, postData, getData}
}

export default useFetch