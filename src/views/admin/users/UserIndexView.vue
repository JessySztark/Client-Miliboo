<template>
  <div>User index</div>
</template>

<script>
import { userService } from '@/_services';
export default{
  name : 'UserIndex',
  mounted() {
    userService.getUser()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  },
}
</script>
