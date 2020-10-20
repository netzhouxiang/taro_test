<template>
  <view class="index">
    <text>{{ msg }}</text>
    <image src="../../resource/banner.png"></image>
  </view>
</template>

<script>
import './index.scss'

export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
