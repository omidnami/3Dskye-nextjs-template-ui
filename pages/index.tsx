
import { Box, Container, Grid } from '@mui/material'
import ProductHover from '../components/card/productHover'
import { FaRegComment} from 'react-icons/fa'
import { AiOutlineLike} from 'react-icons/ai'
import img from '../public/testcard/5494906.64bd85cac8430.jpeg'
import img2 from '../public/testcard/5512121.64c4019ad16a3.jpeg'
import img3 from '../public/testcard/5509643.64c2e1dccecfd.jpeg'
import img4 from '../public/testcard/5509339.64c2c95c665d2.jpeg'
import img5 from '../public/testcard/5508698.64c2986f9ccc1.jpeg'
import img6 from '../public/testcard/5508391.64c285143b450.jpeg'
import img7 from '../public/testcard/5502267.64c041d21c5be.jpeg'
import img8 from '../public/testcard/5494906.64bd85cac8430.jpeg'
import imgStatic from '../public/testcard/5424921.64a1696e4ce42.jpeg'
import banner from '../public/testcard/edf295a6866fb5add6bbe06838d4450b.jpeg'
import Link from 'next/link'
import { useContext } from 'react'
import LangContext from '@/contexts/langContext'
export default function Home() {
  const { l }:any = useContext(LangContext)

  return (
    <Container>
    <main>
      <Box>
        {/* card-box-left slideshow */}
        <Grid container spacing={2}>
          <Grid xs={8}>
            <h2 className='heading-title'>{l.newModels}</h2>
            <Grid container spacing={1}>
            <Grid xs={3}><ProductHover image={ img.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img7.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img2.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img3.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img4.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img5.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img6.src } title="this title product"/></Grid>
            <Grid xs={3}><ProductHover image={ img8.src } title="this title product"/></Grid>
            </Grid>
          </Grid>
          <Grid xs={0.7}></Grid>
          <Grid xs={3.3}>
          <h2 className='heading-title'>{l.polygonExpert}</h2>
          <div className="card-static">
            <img className="card-static-img" src={imgStatic.src} />
            <div className="card-static-push" >
                <h4>this title product</h4>
                <p>
                    <span className="comment">
                        <FaRegComment /> <small style={{paddingRight:'30px'}}>32</small>
                        <AiOutlineLike /> <small>32</small>
                    </span>
                    <span className="like"></span>
                </p>
            </div>
          </div>
          <br/>
          <Link href={'/'} className="btn btn-omid btn-block">{l.uploadModel}</Link>
          </Grid>
        </Grid>
        <div className='clear-fix'></div>
        {/* card-right */}
        <Grid container spacing={3} style={{marginTop:'20px'}}>
          <Grid xs={12}>
            <div className='mt-1'>
              <img src={banner.src} width={'100%'} height={'auto'} />
            </div>
          </Grid>
        </Grid>
        {/* categuris section */}
        <Grid container spacing={3} style={{marginTop:'20px'}}>
          <h2>{l.allModels}</h2>
          <div className='list-home-cat'>
            <ul className='cont-4'>
              <li className='title'>Submit Title</li>
              <li>
                <Link href={'/'}>item categury1</Link>
              </li>
              <li>
                <Link href={'/'}>item categury2</Link>
              </li>
              <li>
                <Link href={'/'}>item categury3</Link>
              </li>
              <li>
                <Link href={'/'}>item categury4</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>

              <li className='title'>Submit Title</li>
              <li>
                <Link href={'/'}>item categury1</Link>
              </li>
              <li>
                <Link href={'/'}>item categury2</Link>
              </li>
              <li>
                <Link href={'/'}>item categury3</Link>
              </li>
              <li>
                <Link href={'/'}>item categury4</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>

              <li className='title'>Submit Title</li>
              <li>
                <Link href={'/'}>item categury1</Link>
              </li>
              <li>
                <Link href={'/'}>item categury2</Link>
              </li>
              <li>
                <Link href={'/'}>item categury3</Link>
              </li>
              <li>
                <Link href={'/'}>item categury4</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>

              <li className='title'>Submit Title</li>
              <li>
                <Link href={'/'}>item categury1</Link>
              </li>
              <li>
                <Link href={'/'}>item categury2</Link>
              </li>
              <li>
                <Link href={'/'}>item categury3</Link>
              </li>
              <li>
                <Link href={'/'}>item categury4</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>

              <li className='title'>Submit Title</li>
              <li>
                <Link href={'/'}>item categury1</Link>
              </li>
              <li>
                <Link href={'/'}>item categury2</Link>
              </li>
              <li>
                <Link href={'/'}>item categury3</Link>
              </li>
              <li>
                <Link href={'/'}>item categury4</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>

              <li className='title'>Submit Title</li>
              <li>
                <Link href={'/'}>item categury1</Link>
              </li>
              <li>
                <Link href={'/'}>item categury2</Link>
              </li>
              <li>
                <Link href={'/'}>item categury3</Link>
              </li>
              <li>
                <Link href={'/'}>item categury4</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
              <li>
                <Link href={'/'}>item categury</Link>
              </li>
            </ul>
          </div>
        </Grid>
      </Box>
    </main>
    </Container>

  )
}
