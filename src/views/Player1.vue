<template>
  <div>
    <div class="video">
      <p style="font-size: 30px">this is <span style="color: red">player1</span> demo</p>
      <JessibucaDemo key="videoCapture" videoId="videoCapture" initUrl="https://live.nodemedia.cn:8443/live/b480_264.flv">
      </JessibucaDemo>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.preview-root {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.video-area {
  width: 80%;
  margin-top: 20px;
}

.video-control {
  width: 20%;
  background-color: blue;
}

.video-player {
  display: inline-flex;
  flex-direction: column;
  border: #434242 solid 1px;
}

.video-pannel {
  display: inline-flex;
  align-items: center;
  background: hsla(0, 0%, 50%, 0.5);
}
</style>