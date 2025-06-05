import { FC, useState } from 'react';
import { TextField, Button, Stack, Snackbar, Alert, Slide, SlideProps } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { validateEmail, validateName, validateMessage } from '../../utils/validators';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SendIcon from '@mui/icons-material/Send';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const successIconAnimation = keyframes`
  0% {
    transform: scale(0) rotate(-45deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(0);
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
`;

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2D7A84',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#2D7A84',
  },
  '& .MuiOutlinedInput-input': {
    padding: '14px 16px',
  },
  '& .MuiInputLabel-outlined': {
    transform: 'translate(16px, 16px) scale(1)',
  },
  '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
    transform: 'translate(14px, -6px) scale(0.75)',
  },
});

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: '8px',
  height: '48px',
  background: 'linear-gradient(45deg, #2D7A84 30%, #3B98A3 90%)',
  boxShadow: '0 3px 5px 2px rgba(45, 122, 132, 0.3)',
  transition: 'transform 0.2s ease',
  borderRadius: '8px',
  '&:hover': {
    background: 'linear-gradient(45deg, #2D7A84 30%, #3B98A3 90%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 10px 2px rgba(45, 122, 132, 0.3)',
  },
  '& .MuiButton-endIcon': {
    marginLeft: '8px',
    transition: 'transform 0.2s ease',
  },
  '&:hover .MuiButton-endIcon': {
    transform: 'translateX(4px)',
  },
}));

const ErrorMessage = styled('div')({
  color: '#d32f2f',
  fontSize: '0.75rem',
  marginTop: '-16px',
  marginBottom: '8px',
});

const SuccessAlert = styled(Alert)(({ theme }) => ({
  background: 'linear-gradient(45deg, #2D7A84 30%, #3B98A3 90%)',
  color: '#fff',
  borderRadius: '16px',
  padding: '16px 24px',
  boxShadow: '0 8px 16px rgba(45, 122, 132, 0.3)',
  minWidth: '300px',
  animation: `${pulseAnimation} 0.5s ease-out`,
  '& .MuiAlert-icon': {
    color: '#fff',
    animation: `${successIconAnimation} 0.5s ease-out`,
    fontSize: '28px',
    marginRight: '12px',
  },
  '& .MuiAlert-message': {
    fontSize: '1rem',
    fontWeight: 500,
    padding: '4px 0',
  },
  '& .MuiAlert-action': {
    paddingTop: 0,
    color: '#fff',
  },
}));

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="down" />;
};

interface FeedbackFormProps {
  onClose: () => void;
}

const initialFormState = {
  name: '',
  email: '',
  message: '',
};

interface FormErrors {
  name: string | null;
  email: string | null;
  message: string | null;
}

const initialErrors: FormErrors = {
  name: null,
  email: null,
  message: null,
};

export const FeedbackForm: FC<FeedbackFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return validateName(value);
      case 'email':
        return validateEmail(value);
      case 'message':
        return validateMessage(value);
      default:
        return null;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every(error => error === null)) {
      setIsSubmitting(true);

      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setOpenSnackbar(true);
        
        setTimeout(() => {
          setFormData(initialFormState);
          onClose();
          setIsSubmitting(false);
        }, 1500);
      } catch (error) {
        setIsSubmitting(false);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <StyledTextField
          label="Ім'я"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          disabled={isSubmitting}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

        <StyledTextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          disabled={isSubmitting}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <StyledTextField
          label="Повідомлення"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          required
          disabled={isSubmitting}
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}

        <SubmitButton
          type="submit"
          variant="contained"
          fullWidth
          disabled={isSubmitting}
          endIcon={<SendIcon />}
        >
          {isSubmitting ? 'Надсилання...' : 'Надіслати'}
        </SubmitButton>
      </Form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={SlideTransition}
      >
        <SuccessAlert 
          icon={<CheckCircleOutlineIcon />}
          onClose={handleCloseSnackbar} 
          variant="filled"
        >
          Дякуємо! Ваше повідомлення успішно надіслано ✨
        </SuccessAlert>
      </Snackbar>
    </>
  );
}; 