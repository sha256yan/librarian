import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';

const Proof = () => (
  <>
    <Head>
      <title>
        Snapshots | Librarian
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Snapshots
        </Typography>
      </Container>
    </Box>
  </>
);

Proof.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Proof;
