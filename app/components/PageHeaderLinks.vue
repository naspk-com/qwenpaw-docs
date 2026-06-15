<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const route = useRoute()
const toast = useToast()
const { copy, copied } = useClipboard()
const site = { url: 'https://fnosp.dustinky.com' }

const mdPath = computed(() => `${site.url}/raw${route.path}.md`)

const items = [
  {
    label: '复制 Markdown 链接',
    icon: 'i-lucide-link',
    onSelect() {
      copy(mdPath.value)
      toast.add({
        title: '已复制到剪贴板',
        icon: 'i-lucide-check-circle'
      })
    }
  },
  {
    label: '以 Markdown 查看',
    icon: 'i-simple-icons:markdown',
    target: '_blank',
    to: `/raw${route.path}.md`
  },
  {
    label: '在 ChatGPT 中打开',
    icon: 'i-simple-icons:openai',
    target: '_blank',
    to: `https://chatgpt.com/?hints=search&q=${encodeURIComponent(`Read ${mdPath.value} so I can ask questions about it.`)}`
  },
  {
    label: '在 Claude 中打开',
    icon: 'i-simple-icons:anthropic',
    target: '_blank',
    to: `https://claude.ai/new?q=${encodeURIComponent(`Read ${mdPath.value} so I can ask questions about it.`)}`
  }
]

async function copyPage() {
  copy(await $fetch<string>(`/raw${route.path}.md`))
}
</script>

<template>
  <UFieldGroup>
    <UButton
      label="复制页面"
      :icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
      color="neutral"
      variant="outline"
      :ui="{
        leadingIcon: [copied ? 'text-primary' : 'text-neutral', 'size-3.5']
      }"
      @click="copyPage"
    />
    <UDropdownMenu
      :items="items"
      :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 8
      }"
      :ui="{
        content: 'w-48'
      }"
    >
      <UButton
        icon="i-lucide-chevron-down"
        size="sm"
        color="neutral"
        variant="outline"
        aria-label="打开复制操作菜单"
      />
    </UDropdownMenu>
  </UFieldGroup>
</template>
