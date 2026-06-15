<script setup lang="ts">
const activeLabel = 'QwenPaw'
// no-op: docs 为默认激活项，由顶层按钮样式直接体现

const items = computed(() => {
  const result: Array<Record<string, unknown>> = [{
    label: 'QwenPaw',
    to: '/',
    onSelect: () => navigateTo('/'),
    color: 'primary',
    checked: true,
    type: 'checkbox'
  }, {
    label: 'Tunnel',
    to: 'https://tunnel.naspk.com',
    onSelect: () => window.open('https://tunnel.naspk.com', '_blank'),
    color: 'neutral',
    checked: false,
    type: 'checkbox'
  }, {
    label: 'IT Tools',
    to: 'https://ittools.naspk.com',
    onSelect: () => window.open('https://ittools.naspk.com', '_blank'),
    color: 'neutral',
    checked: false,
    type: 'checkbox'
  }, {
    label: '闲鱼超级管家',
    to: 'https://goofish.naspk.com',
    onSelect: () => window.open('https://goofish.naspk.com', '_blank'),
    color: 'neutral',
    checked: false,
    type: 'checkbox'
  }, {
    label: 'IPATool',
    to: 'https://www.ipatool.cn',
    onSelect: () => window.open('https://www.ipatool.cn', '_blank'),
    color: 'neutral',
    checked: false,
    type: 'checkbox'
  }, {
    label: 'FnUI Design',
    to: 'https://www.fnui.design',
    onSelect: () => window.open('https://www.fnui.design', '_blank'),
    color: 'neutral',
    checked: false,
    type: 'checkbox'
  }, {
    label: '查看所有飞牛应用',
    to: 'https://fnos.naspk.com',
    onSelect: () => window.open('https://fnos.naspk.com', '_blank'),
    color: 'neutral',
    checked: false,
    type: 'checkbox'
  }]

  return result
})
</script>

<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="items"
    :content="{ align: 'start' }"
    :ui="{ content: 'min-w-fit' }"
    size="xs"
  >
    <UButton
      :label="activeLabel"
      variant="soft"
      color="primary"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
      class="-mb-[6px] font-semibold rounded-full truncate"
      :class="[open && 'bg-primary/15']"
      :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
      }"
    />
  </UDropdownMenu>
</template>
