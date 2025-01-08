import { Button } from '@mui/material'
import { TooltipIcono } from './cliente-tootip'
import { OverridableStringUnion } from '@mui/types'
import { ButtonPropsVariantOverrides } from '@mui/material/Button/Button'

interface BotonParams {
  id: string
  variante?: 'icono' | 'boton'
  variant?: OverridableStringUnion<
    'text' | 'outlined' | 'contained',
    ButtonPropsVariantOverrides
  >
  texto: string
  icono: string
  descripcion: string
  accion: () => void
}

export const BotonIcon = ({
  id,
  texto,
  icono,
  variante = 'boton',
  variant = 'contained',
  descripcion,
  accion,
}: BotonParams) => {
  return variante == 'boton' ? (
    <Button
      id={id}
      variant={variant}
      sx={{ ml: 1, mr: 1 }}
      size={'small'}
      onClick={() => {
        accion()
      }}
    >
      {texto}
    </Button>
  ) : (
    <TooltipIcono
      id={id}
      titulo={descripcion}
      accion={() => {
        accion()
      }}
      icono={icono}
      name={texto}
    />
  )
}
