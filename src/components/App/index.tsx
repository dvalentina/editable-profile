import { useState } from 'react';
import ManageAccountModal from '../Modals/ManageAccountModal';

function App() {
  const [isManageAccountModalOpen, setIsManageAccountModalOpen] =
    useState(false);

  const handleManageAccountButtonClick = () => {
    setIsManageAccountModalOpen(true);
  };

  const handleManageAccountModalClose = () => {
    setIsManageAccountModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleManageAccountButtonClick}>Manage account</button>
      <ManageAccountModal
        isOpen={isManageAccountModalOpen}
        onClose={handleManageAccountModalClose}
      />
    </div>
  );
}

export default App;
