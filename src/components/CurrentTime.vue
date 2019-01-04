<template>
  <div class="time">
    <div class="time-selector">
      <label for>Converted time</label>
      <input
        type="number"
        min="0"
        max="23"
        step="1"
        :value="toTime.hour"
        disabled
      />
      <span class="separator">:</span>
      <input
        type="number"
        min="0"
        max="59"
        step="1"
        :value="toTime.minute"
        disabled
      />
    </div>
    <div class="difference">{{ toTime.difference }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    toTime() {
      return this.$store.getters.toTime;
    }
  }
};
</script>

<style scoped>
.difference {
  color: #fff;
  text-align: right;
}
</style>
