import * as React from 'react';
import type { Metadata } from 'next';
import RouterLink from 'next/link';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { ArrowLeft as ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr/ArrowLeft';

import { config } from '@/config';
import { paths } from '@/paths';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Stack spacing={3}>
        <div>
            <Typography variant="h1" color="grey.700" align="center" gutterBottom sx={{ pt: '15px' }}>
                LOREM IPSUM
            </Typography>
        </div>
        <Typography color="text.secondary" variant="body1" sx={{ textAlign: 'center' }}>
          Esta es la página de inicio para la demo pulse el botón para ir a clientes
        </Typography>
        <Button
          component={RouterLink}
          href={paths.dashboard.customers}
          startIcon={<ArrowLeftIcon fontSize="var(--icon-fontSize-md)" />}
          variant="contained"
        >
          ir a clientes
        </Button>
      </Stack>
    </Grid>
  );
}
