'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.querySelector('.task-list');
  if (!taskList) {
    throw new Error('Task list element not found');
  }
  taskList.addEventListener('click', (event) => {
    const eventTarget = event.target;
    console.log('Event Target:', eventTarget);
    console.log('Tag Name:', eventTarget.tagName);
    if (
      eventTarget.tagName === 'BUTTON' &&
      eventTarget.closest('.task-list-item')
    ) {
      const taskListItem = eventTarget.closest('.task-list-item');
      console.log(taskListItem);
      taskListItem.remove();
      console.log(eventTarget.tagName);
    }
  });
});
