import EditSettingsModal from '../EditSettingsModal/EditSettingsModal';

interface IEditInvestTermsModal {
  isOpen: boolean;
  onClose: () => void;
}

function EditInvestTermsModal({ isOpen, onClose }: IEditInvestTermsModal) {
  return (
    <EditSettingsModal
      isOpen={isOpen}
      onClose={onClose}
      leftInfo={{
        title: 'Edit Invest terms',
        description:
          'It will take a couple of minutes. Change the Invest terms and confirm with SMS code',
      }}
      rightInfo={{
        title: 'ID 001894',
        description: 'Signed on 05.10.2020',
      }}
      notification={{
        status: 'error',
        text: 'After changes you will need to sign a new document',
      }}
      tabLabels={['Amount', 'Duration']}
    />
  );
}

export default EditInvestTermsModal;
