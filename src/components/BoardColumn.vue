<template>
  <AppDrop class="column" @drop="moveTaskOrColumn">
    <AppDrag :transferData="{ type: 'column', fromColumnIndex: columnIndex}">
      <div>
        <div class="column-name font-bold px-2 mt-2 mb-4">{{ column.name }}</div>
        <ColumnTask
          v-for="(task,taskIndex) in column.tasks"
          :key="task.id"
          :task="task"
          :taskIndex="taskIndex"
          :column="column"
          :columnIndex="columnIndex"
          :board="board"
        />
        <input
          type="text"
          class="block p-2 text-gray-800 w-full outline-none bg-transparent"
          placeholder="+ enter new task"
          @keyup.enter="createTask($event,column.tasks)"
        />
      </div>
    </AppDrag>
  </AppDrop>
</template>
<script>
import { mapState } from 'vuex';
import AppDrag from '@/components/AppDrag';
import AppDrop from '@/components/AppDrop';
import ColumnTask from '@/components/ColumnTask';
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin';
export default {
  mixins: [movingTasksAndColumnsMixin],
  components: {
    ColumnTask,
    AppDrag,
    AppDrop
  },
  methods: {
    createTask(event, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: event.target.value
      });
      event.target.value = '';
    }
  }
};
</script>

<style lang="scss" scoped>
.column {
  @apply bg-gray-400 shadow rounded mx-2;
  min-width: 350px;
}
.task {
  @apply bg-white p-1 rounded cursor-pointer my-2 mx-2;
}
</style>
