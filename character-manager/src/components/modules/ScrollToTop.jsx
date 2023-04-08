import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


const PAGE_Y_OFFSET = 200

const ScrollToTop = () => {
  const [show, setShow] = useState(false)

  
  const changeShow = () => {
    if (window.pageYOffset > PAGE_Y_OFFSET) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const onScrollTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', changeShow)
    return () => window.removeEventListener('scroll', changeShow)
  }, [])

  if (show)
    return (
      <div>
        <IconButton aria-label="scoroll to top" sx={{ mt: 2}} onClick={onScrollTop} >
            <KeyboardDoubleArrowUpIcon />
        </IconButton>
      </div>
    )
  else return null
}

export default ScrollToTop