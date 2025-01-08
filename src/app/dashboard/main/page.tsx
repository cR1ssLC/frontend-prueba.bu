import * as React from 'react';
import type { Metadata } from 'next';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { config } from '@/config';

export const metadata = { title: `Inicio | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
    return (
    <Stack spacing={3}>
        <div>
            <Typography variant="h1" color="grey.700" align="center" gutterBottom sx={{ pt: '15px' }}>
                LOREM IPSUM
            </Typography>
        </div>
    </Stack>
    );
  }