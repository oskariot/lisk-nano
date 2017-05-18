/**
 * This component triggers a modal with the transfer form component.
 *
 * @module app
 * @submodule showTransferModal
 * @todo Replace this with a general dialog service
 */
app.directive('showTransferModal', (TransferModal) => {
  /**
   * Uses TransferModal service to show a modal containing Transfer form
   *
   * @param {Object} scope - Isolated scope.
   * @param {Object} element - Angular.element instance referring directive element
   *
   */
  const ShowTransferModalLink = function (scope, element) {
    element.bind('click', () => {
      TransferModal.show(scope.recipientId, scope.amount);
    });
  };

  return {
    restrict: 'A',
    scope: {
      recipientId: '<',
      amount: '<',
    },
    link: ShowTransferModalLink,
  };
});
