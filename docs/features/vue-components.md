# Vue Components

VitePress allows you to use Vue components directly in your Markdown files.

## Using Components

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>
```

## Component Libraries

You can use any Vue component library with VitePress. Just install and import them as you would in a regular Vue application.