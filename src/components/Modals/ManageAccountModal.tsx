import EditSettingsModal from '../EditSettingsModal/EditSettingsModal';

interface IManageAccountModal {
  isOpen: boolean;
  onClose: () => void;
}

function ManageAccountModal({ isOpen, onClose }: IManageAccountModal) {
  return (
    <EditSettingsModal
      isOpen={isOpen}
      onClose={onClose}
      leftInfo={{
        title: 'Manage account',
        description:
          'It will take a couple of minutes. Change profile settings and confirm with SMS code',
      }}
      rightInfo={{
        title: 'Edit profile',
        description:
          'It will take a couple of minutes. Change profile settings and confirm with SMS code',
      }}
      notification={{
        status: 'warning',
        text: 'After changes a new verification will be needed',
      }}
      tabLabels={['Personal', 'Company']}
    />
  );
}

export default ManageAccountModal;
