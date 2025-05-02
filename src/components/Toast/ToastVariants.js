import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
} from 'react-feather';

export const DEFAULT_TOAST_VARIANT = 'notice';

export const TOAST_VARIANTS = {
  notice: {
    displayText: 'Notice',
    icon: Info,
  },
  warning: {
    displayText: 'Warning',
    icon: AlertTriangle,
  },
  success: {
    displayText: 'Success',
    icon: CheckCircle,
  },
  error: {
    displayText: 'Error',
    icon: AlertOctagon,
  },
};