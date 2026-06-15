---
title: 首页
description: 部署在你自己的 NAS 上的个人 AI 助理。支持微信/QQ/钉钉/飞书等多通道对话，多智能体协作，定时任务，Skills 无限扩展。
image:
  light: /images/hero-qwenpaw-light.png
  dark: /images/hero-qwenpaw-dark.png
links:
  - label: 快速开始
    to: /getting-started
    icon: i-lucide-rocket
  - label: 控制台功能
    to: /setup/dashboard
    icon: i-lucide-monitor
  - label: QwenPaw 官网
    to: https://qwenpaw.agentscope.io
    target: _blank
    icon: i-lucide-external-link
  - label: 加入 QQ 群聊
    to: https://qm.qq.com/q/uydPbFJ4ic
    target: _blank
    icon: i-lucide-users
features:
  - title: 多通道对话
    description: 支持微信、QQ、钉钉、飞书、Discord、Telegram、iMessage 等，一处部署，全平台接入。
    icon: i-lucide-message-square
  - title: 多智能体协作
    description: 独立配置多个 Agent，各自拥有独立的记忆和技能，可互相通信协作完成复杂任务。
    icon: i-lucide-users
  - title: 私有部署
    description: 部署在你自己的 NAS 上，支持本地大模型完全离线运行，数据不外泄。
    icon: i-lucide-server
quickLinks:
  - title: 快速开始
    description: 了解 QwenPaw 控制台功能概览，快速上手使用。
    to: /getting-started
    icon: i-lucide-rocket
  - title: 安装指南
    description: 在飞牛 NAS 上安装和配置 QwenPaw。
    to: /getting-started/installation
    icon: i-lucide-download
  - title: 控制台功能
    description: 了解 QwenPaw 控制台的各项功能模块。
    to: /setup/dashboard
    icon: i-lucide-monitor
  - title: 帮助与排障
    description: 常见问题解答和故障排除指南。
    to: /help/troubleshooting
    icon: i-lucide-life-buoy
---

## 什么是 QwenPaw？

QwenPaw 是一款部署在你自己的 NAS 上的个人 AI 助理，由 [AgentScope](https://github.com/agentscope-ai) 团队基于 AgentScope Runtime 与 ReMe 构建。它不是普通的聊天机器人——你可以通过微信、QQ、钉钉、飞书、Discord、Telegram 等多通道与它交互，配置定时任务让它自动执行工作，通过 Skills 无限扩展它的能力。所有数据完全存储在本地，无需依赖任何第三方云服务。

飞牛通过应用商店为你提供了一键安装的 QwenPaw 控制台，你可以在控制台中管理智能体、配置通道、安装技能、设置定时任务等。

> **提示**：本文档主要介绍 QwenPaw 控制台的功能和飞牛安装使用方式。关于 QwenPaw 本体的详细使用文档（如智能体创建、Skills 开发等），请访问 [QwenPaw 官网](https://qwenpaw.agentscope.io)。

## 核心功能

- **多通道对话**：支持微信、QQ、钉钉、飞书、Discord、Telegram、iMessage、腾讯元宝、企业微信等十余种通道，一处部署，全平台接入
- **多智能体协作**：独立配置多个 Agent，各自拥有独立的记忆和技能，可互相通信协作完成复杂任务
- **定时任务**：设置 Cron 定时任务，让 QwenPaw 在指定时间自动执行工作
- **Skills 扩展**：能力由 Skills 决定，支持无限扩展，社区持续贡献新技能
- **本地优先**：支持 Ollama 等本地大模型，完全离线也能工作，数据不外泄
- **多层安全防护**：内置沙箱执行、会话隔离、权限控制等安全机制

## 适用场景

| 场景 | 说明 |
|------|------|
| 日常助理 | 通过微信/QQ 等随时和你的 AI 助理对话 |
| 自动化任务 | 设置定时任务，自动处理日报、数据汇总等重复性工作 |
| 知识管理 | 上传文档让 AI 学习，构建个人知识库 |
| 团队协作 | 多个智能体分工协作，完成复杂的多步骤任务 |
| 本地 AI 服务 | 配合 Ollama 使用本地大模型，完全离线运行 |

## 文档导航

| 章节 | 内容 |
|------|------|
| [快速开始](/getting-started) | QwenPaw 控制台功能概览与飞牛安装指南 |
| [控制台功能](/setup/dashboard) | 控制台首页、运行日志、外网访问、关于等模块说明 |
| [管理与配置](/manage) | 飞牛环境下的配置说明、更新与卸载 |
| [帮助](/help/troubleshooting) | 常见问题排查与排障指南 |