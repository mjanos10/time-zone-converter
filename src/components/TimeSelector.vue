<template>
  <div class="time-selector">
    <label for>Time to convert</label>
    <input type="number" min="0" max="23" step="1" v-model="fromHour" />
    <span class="separator">:</span>
    <input type="number" min="0" max="59" step="1" v-model="fromMinute" />
  </div>
</template>

<script>
export default {
  computed: {
    fromHour: {
      get() {
        return this.$store.state.fromTime.hour;
      },
      set(value) {
        this.$store.commit("SET_FROM_TIME", { hour: value });
      }
    },
    fromMinute: {
      get() {
        return this.$store.state.fromTime.minute;
      },
      set(value) {
        this.$store.commit("SET_FROM_TIME", { minute: value });
      }
    }
  }
};
</script>

<style scoped>
label {
  display: block;
}
</style>
