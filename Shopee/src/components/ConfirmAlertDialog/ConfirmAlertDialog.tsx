import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

interface Props {
  children: React.ReactNode
  title?: string
  description?: string
  okText?: string
  canCelText?: string
  onOk?: () => void
  onCancel?: () => void
}

export function ConfirmAlertDialog({
  children,
  title,
  description,
  okText = 'Continue',
  canCelText = 'Cancel',
  onOk,
  onCancel,
}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>{canCelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onOk}>{okText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
