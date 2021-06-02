export const statusColorClass = (status) => {
    switch(status) {
        case 'ACCEPTED':
          return 'accepted';
        case 'PENDING':
          return 'pending';
        case 'NEW':
          return 'new';
        case 'CLOSED':
          return 'closed';
        case 'IN PROGRESS':
          return 'inProgress';
        default:
          return 'new';
      }
}