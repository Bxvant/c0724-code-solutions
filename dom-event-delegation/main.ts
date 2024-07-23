document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.querySelector('.task-list');

  if (!taskList) {
    throw new Error('Task list element not found');
  }

  taskList.addEventListener('click', (event: Event) => {
    const eventTarget = event.target as HTMLElement;
    console.log('Event Target:', eventTarget);
    console.log('Tag Name:', eventTarget.tagName);
    if (
      eventTarget.tagName === 'BUTTON' &&
      eventTarget.closest('.task-list-item')
    ) {
      const taskListItem = eventTarget.closest(
        '.task-list-item'
      ) as HTMLElement;
      console.log(taskListItem);
      taskListItem.remove();
      console.log(eventTarget.tagName);
    }
  });
});
