import { useState } from 'react';
import ManageAccountModal from '../Modals/ManageAccountModal';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../themes/darkTheme.tsx';
import { lightTheme } from '../../themes/lightTheme.tsx';
import EditInvestTermsModal from '../Modals/EditInvestTermsModal.tsx';

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const [isManageAccountModalOpen, setIsManageAccountModalOpen] =
    useState(false);
  const [isEditInvestTermsModalOpen, setIsEditInvestTermsModalOpen] =
    useState(false);

  const handleChooseTheme = (event: React.MouseEvent) => {
    if ((event.target as HTMLInputElement).value === 'light') {
      setTheme(lightTheme);
    }
    if ((event.target as HTMLInputElement).value === 'dark') {
      setTheme(darkTheme);
    }
  };

  const handleManageAccountButtonClick = () => {
    setIsManageAccountModalOpen(true);
  };

  const handleManageAccountModalClose = () => {
    setIsManageAccountModalOpen(false);
  };

  const handleEditInvestTermsButtonClick = () => {
    setIsEditInvestTermsModalOpen(true);
  };

  const handleEditInvestTermsModalClose = () => {
    setIsEditInvestTermsModalOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <fieldset>
          <legend>Select theme:</legend>
          <div>
            <input
              type='radio'
              id='light'
              name='theme'
              value='light'
              onClick={handleChooseTheme}
            />
            <label htmlFor='light'>Light theme</label>
          </div>
          <div>
            <input
              type='radio'
              id='dark'
              name='theme'
              value='dark'
              onClick={handleChooseTheme}
            />
            <label htmlFor='dark'>Dark Theme</label>
          </div>
        </fieldset>

        <button onClick={handleManageAccountButtonClick}>Manage account</button>
        <ManageAccountModal
          isOpen={isManageAccountModalOpen}
          onClose={handleManageAccountModalClose}
        />

        <button onClick={handleEditInvestTermsButtonClick}>
          Edit invest terms
        </button>
        <EditInvestTermsModal
          isOpen={isEditInvestTermsModalOpen}
          onClose={handleEditInvestTermsModalClose}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
