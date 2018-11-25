<template>
  <div class="Home">
    首页
    <p>{{ counta }}</p>
    <p>{{ counts }}</p>
    <p>{{ count }}</p>
    <!-- <p>{{ countAlias }}</p>
    <p>{{ countNum }}</p> -->
    <p>
      <button @click="INCREMENT(10)">+</button>
      <button @click="dec({x: 10})">-</button>
    </p>
    <p>{{actionNum}}</p>
    <p>
      <button @click="addActionNum(5)">点击</button>
    </p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'Vuex'
export default {
  name: 'Home',
  data () {
    return {
      num: 5
    }
  },
  methods: {
    ...mapMutations([
      'INCREMENT',
      'DECREMENT'
    ]),
    ...mapMutations({
      dec: 'DECREMENT'
    }),
    ...mapActions({
      addActionNum: 'actionnum'
    })
    // addActionNum (n) {
    //   this.$store.dispatch('actionnum', n)
    // }
    // increment () {
    //   this.$store.commit('INCREMENT', 10)
    // },
    // decrement () {
    //   this.$store.commit({
    //     type: 'DECREMENT',
    //     x: 10
    //   })
    // }
  },
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // }
  // computed: mapState({
  //   count: state => state.count,
  //   countAlias: 'count',
  //   countNum (state) {
  //     return state.count + this.num
  //   }
  // })
  computed: {
    // counts () {
    //   return this.$store.getters.counts(3)
    // },
    ...mapState([
      'count'
    ]),
    ...mapGetters({
      counta: 'counts',
      actionNum: 'num'
    }),
    ...mapGetters([
      'counts'
    ])
  }
}
</script>
