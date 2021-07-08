<template>
  <b-container class="p-3">
    <h1>Recursive Component</h1>
    <TreeNode v-for="node in nodes" :key="node.id" :node="node" />
  </b-container>
</template>

<script>
import TreeNode from '@/components/TreeNode'

export default {
  name: 'Home',
  components: {
    TreeNode
  },
  computed: {
    nodes() {
      return [
        {
          id: 1,
          label: 'Foods',
          children: [
            {
              id: 2,
              label: 'Fruits',
              children: [
                {
                  id: 3,
                  label: 'Banana'
                },
                {
                  id: 4,
                  label: 'Apple'
                },
                {
                  id: 5,
                  label: 'Strawberry'
                }
              ]
            },
            {
              id: 6,
              label: 'Vegetables',
              children: [
                {
                  id: 7,
                  label: 'Carrot'
                },
                {
                  id: 8,
                  label: 'Lettuce'
                },
                {
                  id: 9,
                  label: 'Potato'
                }
              ]
            }
          ]
        },
        {
          id: 10,
          label: 'Drinks',
          children: [
            {
              id: 11,
              label: 'Beers',
              children: [
                {
                  id: 12,
                  label: 'Budweiser'
                },
                {
                  id: 13,
                  label: 'Heineken'
                }
              ]
            },
            {
              id: 14,
              label: 'Wines'
            },
            {
              id: 15,
              label: 'Whiskey'
            }
          ]
        }
      ]
    }
  }
}
</script>
