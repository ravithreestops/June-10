export const statusColorClass = (status) => {
  switch (status) {
    case 'NEW':
      return 'new';
    case 'WIP':
      return 'inProgress';
    case 'QUOTE_RECEIVED':
      return 'qtReceived';
    case 'QUOTE_ACCEPTED':
      return 'qtAccepted';
    case 'QUOTE_PO_SUBMIT':
      return 'submitted';
    case 'QUOTE_REJECTED':
      return 'rejected';
    case 'PROJECT_IN_PROGRESS':
      return 'projectInProgress';
    case 'QUOTE_ADMIN_REJECTED':
      return 'adminRejected';
    case 'CLOSED':
      return 'closed';
    default:
      return 'new';
  }
}