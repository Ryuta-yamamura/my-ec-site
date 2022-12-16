import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Box from '@mui/material/Box';

export default function App() {
  return (
    <Box bgcolor="black" color = 'white'>
    <p>external links</p>
      <Grid container alignItems="center"  spacing={6}>
        <Grid item xs={4}>
        </Grid>
        <Grid item>
          <Link href='/#'>
            <Fab size="small" color="primary" aria-label="facebook">
              <FacebookIcon color="white" />
            </Fab>
          </Link>
        </Grid>
        <Grid item>

          <Link href='/#'>
            <Fab size="small" color="primary" aria-label="twitter">
              <TwitterIcon color="white" />
            </Fab>
          </Link>
        </Grid>
        <Grid item>

          <Link href='/#'>
            <Fab size="small" color="secondary" aria-label="add">
              <InstagramIcon color="white" />
            </Fab>
          </Link>
        </Grid>
        </Grid>

      <ul>
        <div className='' onClick={() => menuFunction()}>
          <span></span>
          <span></span>
          <p>Close</p>
        </div>
        <li><Link href="/concept">CONCEPT</Link></li>
        <li><Link href="/menu">MENU</Link></li>
        <li><Link href="/shop">SHOP</Link></li>
        <li><Link href="/access">ACCESS</Link></li>
      </ul>
    </Box>
  );
}