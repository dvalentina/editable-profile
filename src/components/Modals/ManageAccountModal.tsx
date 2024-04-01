import EditSettingsModal from '../EditSettingsModal';

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
    />
  );
}

export default ManageAccountModal;
