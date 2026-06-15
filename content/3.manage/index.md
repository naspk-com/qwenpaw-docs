---
title: 飞牛环境配置
description: QwenPaw 在飞牛环境下的常用配置说明。
navigation:
  icon: i-lucide-settings-2
---

本文介绍 QwenPaw 在飞牛 NAS 环境下的常用配置信息。

## 应用信息

| 项目 | 值 |
|------|-----|
| 应用名称 | QwenPaw |
| 应用 ID | com.dustinky.qwenpaw |
| 控制台端口 | 19091 |
| 最低系统版本 | fnOS >= 0.9.21 |

## 日志级别

安装时可以选择日志级别：

| 级别 | 说明 |
|------|------|
| `info` | 默认级别，适合日常使用 |
| `debug` | 调试级别，输出详细日志，排查问题时使用 |
| `warning` | 只显示警告和错误 |
| `error` | 只显示错误信息 |

## 本地文件位置

以下路径为飞牛 NAS 上 QwenPaw 的关键文件位置：

| 内容 | 路径 |
|------|------|
| 应用目录 | `/var/apps/com.dustinky.qwenpaw/` |
| Python 虚拟环境 | `/var/apps/com.dustinky.qwenpaw/venv/` |
| 配置数据 | `/var/apps/com.dustinky.qwenpaw/data/` |

## Ollama 配置

如果你使用 Ollama 本地模型：

1. 先在飞牛应用商店安装 **Ollama** 应用
2. 在 QwenPaw 控制台的「模型」页面添加 Ollama 模型
3. API 地址填写 Ollama 服务地址（如 `http://localhost:11434` 或飞牛上 Ollama 的应用端口）
4. API Key 字段填写任意非空字符串即可（如 `ollama`）

## 配合 Cloudflare Tunnel 远程访问

QwenPaw 控制台默认只能在局域网访问。如果你想在外网访问，推荐使用飞牛应用商店中的 [Cloudflare Tunnel](https://tunnel.naspk.com) 应用。

配置步骤：

1. 在应用商店安装 Cloudflare Tunnel
2. 在 Tunnel 中注册域名（如 `qwenpaw.yourdomain.com`）
3. 服务地址填写 `localhost:19091`
4. 保存后即可通过域名在外网访问 QwenPaw 控制台

> 最新版本的 QwenPaw 控制台已内置 Tunnel 一键穿透功能，可在控制台内直接完成上述配置。

## 更新

当飞牛应用商店提示 QwenPaw 有新版本时：

1. 打开应用中心，找到 QwenPaw
2. 点击「更新」
3. 可选择是否保留现有运行环境（推荐保留，加快更新速度）
4. 等待更新完成

更新不会丢失已有的配置和数据。

## 卸载

在飞牛应用中心找到 QwenPaw，点击卸载即可。卸载前请注意：

- 先创建备份（在控制台「备份」页面操作）
- 卸载会删除应用文件，但 `/var/apps/com.dustinky.qwenpaw/data/` 中的用户数据可能需要手动清理