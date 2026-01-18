# Cognispec 研究报告：Claude Code 深度集成产品需求插件

## 一、Claude Code 核心能力分析

### 1.1 基础能力

Claude Code 是一个运行在终端中的 agentic 编码工具，具备以下核心能力：

| 能力类别 | 具体功能 |
|---------|---------|
| **代码理解** | 阅读、解释、搜索代码库；理解架构和依赖关系 |
| **文件操作** | 读写文件、创建目录、执行 shell 命令 |
| **Git 工作流** | 提交、分支管理、PR 创建、代码审查 |
| **Web 能力** | 网页搜索、URL 抓取、API 调用 |
| **多模态** | 处理图片、截图、PDF、Jupyter notebooks |
| **工具集成** | MCP 协议连接外部服务（JIRA、GitHub、数据库等）|

### 1.2 扩展机制

Claude Code 提供三种主要扩展方式：

**1. Slash Commands（斜杠命令）**
- 位置：`.claude/commands/` 目录
- 触发：用户显式输入 `/command`
- 适用：重复性工作流、项目特定操作

**2. Skills（技能）**
- 位置：`.claude/skills/` 目录
- 触发：Claude 根据请求**自动匹配**
- 结构：`SKILL.md` + 可选脚本
- 适用：教会 Claude "如何做某事"

**3. MCP Servers**
- 位置：`.mcp.json`
- 功能：连接外部数据源和工具
- 关系：MCP 提供连接，Skills 提供操作指南

### 1.3 关键特性

- **CLAUDE.md**：自动加载的上下文文件，用于项目规范、环境配置、工作流指南
- **Extended Thinking**：使用 "think" 关键词激活深度推理模式
- **Headless Mode**：`-p` 参数支持 CI/自动化集成
- **Multi-Claude**：支持多实例并行工作（git worktree）

---

## 二、GitHub 优秀项目分析

### 2.1 PRD-Taskmaster

**来源**: [github.com/anombyte93/prd-taskmaster](https://github.com/anombyte93/prd-taskmaster)

**核心流程** (8步工作流)：
1. Discovery 问答（12+ 问题）
2. 环境验证
3. 代码库分析
4. PRD 生成
5. 目录初始化
6. 质量验证（13项检查）
7. 任务分解建议
8. 结果展示

**输出产物**：
```
.taskmaster/
├── docs/
│   └── prd.md          # 主 PRD 文档
├── CLAUDE.md           # Claude Code 工作流指南
└── codex.md            # Codex 用户指南
```

**亮点**：
- 13 项自动质量检查（完整性、可测试性、模糊语言检测、SMART 指标）
- 自动检测 Task-Master-AI 工具并集成
- TDD 优先的开发指南

### 2.2 ShipSpec

**来源**: [github.com/jsegov/shipspec-claude-code-plugin](https://github.com/jsegov/shipspec-claude-code-plugin)

**三层架构**：
1. **Specification Phase**: 创意 → PRD → SDD（技术设计）→ TASKS.json
2. **Implementation Phase**: 带验收标准的任务执行
3. **Verification Loop**: 持续验证直到标准通过

**核心命令**：
- `/feature-planning [desc]` - 完整规划流程（7阶段）
- `/implement-task <dir> [id]` - 执行单个任务
- `/implement-feature <dir>` - 端到端自动实现

**亮点**：
- "Ralph Wiggum loop" - 持续迭代直到完成
- Fibonacci 任务估点（1-8）
- Atlassian 8 段式 SDD 模板

### 2.3 Superpowers (obra)

**来源**: [github.com/obra/superpowers](https://github.com/obra/superpowers)

**20+ 实战技能**：
- `/brainstorm` - 需求头脑风暴
- `/write-plan` - 计划撰写
- `/execute-plan` - 计划执行
- `/tdd` - 测试驱动开发
- `/debug` - 系统化调试

**理念**：工程最佳实践的规范化编码

### 2.4 ChatPRD MCP 集成

**来源**: [chatprd.ai](https://www.chatprd.ai/resources/PRD-for-Claude-Code)

**独特价值**：
- MCP 协议实时同步 PRD
- PRD 更新自动反映到 Claude 上下文
- 产品愿景与代码实现的持续对齐

---

## 三、行业最佳实践总结

### 3.1 PRD 结构最佳实践

```markdown
## 标准 PRD 结构
1. Executive Summary（执行摘要）
2. Problem Statement（问题陈述 + 商业影响）
3. Solution Overview（解决方案概述）
4. User Stories（用户故事 + 验收标准）
5. Functional Requirements（功能需求）
6. Technical Requirements（技术需求）
7. Constraints & Dependencies（约束与依赖）
8. Success Metrics（SMART 成功指标）
```

### 3.2 渐进式披露原则

**核心理念**：减少认知负荷，逐层揭示信息

**文档应用**：
- **第一层**：标题 + 执行摘要（30秒理解全貌）
- **第二层**：问题陈述 + 解决方案概述（2分钟深入）
- **第三层**：详细需求 + 技术规格（按需展开）
- **第四层**：边缘案例 + 附录（专家级细节）

**UI 模式**：
- 折叠面板（Accordion）
- 标签页（Tabs）
- "了解更多" 链接
- 目录导航

### 3.3 Claude Code 工作流最佳实践

**官方推荐流程**：
```
Explore → Plan → Code → Commit
```

1. **探索阶段**：让 Claude 阅读相关文件，不写代码
2. **规划阶段**：使用 "think" 激活深度思考
3. **实现阶段**：增量实现，频繁验证
4. **提交阶段**：清晰的提交信息

**TDD 集成**：
```
RED → GREEN → REFACTOR
```
- 先写测试（预期失败）
- 实现代码（测试通过）
- 重构优化

---

## 四、Cognispec 设计建议

### 4.1 产品定位

**一句话**：用 Claude Code 原生能力，将模糊想法转化为结构化的、人脑友好的需求文档和研发计划。

**差异化**：
- 渐进式披露优先（Progressive Disclosure First）
- 深度 Claude Code 原生集成（不是通用 AI 工具）
- 面向研发全流程（需求 → 设计 → 开发 → 测试 → 部署）

### 4.2 核心功能模块

#### 模块一：需求调研与文档生成

**输入**：
- 用户想法/问题描述
- 现有代码库（可选）
- 竞品/参考资料 URL（可选）

**交互流程**：
```
1. 启动对话式需求发现（类似 PRD-Taskmaster 的问答）
2. 自动搜索竞品和最佳实践（Web Search）
3. 分析现有代码库（如有）
4. 生成渐进式披露结构的 PRD
```

**输出**：
```
.cognispec/
├── discovery/
│   ├── interview.md      # 需求访谈记录
│   └── research.md       # 竞品/市场调研
├── prd/
│   ├── summary.md        # 执行摘要（第一层）
│   ├── overview.md       # 问题与方案（第二层）
│   ├── requirements.md   # 详细需求（第三层）
│   └── appendix.md       # 附录（第四层）
└── CLAUDE.md             # 项目上下文
```

#### 模块二：研发计划生成

**输入**：
- 已确认的 PRD
- 技术栈偏好
- 团队规模/约束

**输出**：
```
.cognispec/
├── plan/
│   ├── architecture.md   # 技术架构设计
│   ├── phases.md         # 分阶段计划
│   ├── tasks.json        # 任务分解（可导入 Taskmaster）
│   └── risks.md          # 风险与缓解
└── workflows/
    ├── dev.md            # 开发工作流
    ├── test.md           # 测试策略
    └── deploy.md         # 部署方案
```

### 4.3 技术实现方案

**推荐方案：Skills + Slash Commands 混合**

```
.claude/
├── skills/
│   └── cognispec/
│       └── SKILL.md      # 自动触发的需求发现技能
└── commands/
    ├── discover.md       # /discover - 启动需求发现
    ├── research.md       # /research - 竞品调研
    ├── prd.md            # /prd - 生成 PRD
    └── plan.md           # /plan - 生成研发计划
```

**为什么不用 MCP**：
- MCP 适合连接外部数据源
- 我们的核心是"教会 Claude 如何做"，这是 Skills 的强项
- 避免过度工程化

### 4.4 渐进式披露实现策略

**文档结构**：
```markdown
# PRD: [项目名称]

## 30秒概览
> 一段话说清楚这是什么、解决什么问题、核心价值

## 目录
- [问题与背景](#问题与背景)
- [解决方案](#解决方案)
- [用户故事](#用户故事)
- [技术需求](#技术需求)

---

## 问题与背景
<details>
<summary>展开查看详细分析</summary>
[详细内容...]
</details>

## 解决方案
### 核心功能（必读）
[精简描述...]

<details>
<summary>功能细节与边缘案例</summary>
[详细内容...]
</details>
```

**关键原则**：
1. 每个章节先给结论/摘要
2. 详细内容用 `<details>` 折叠
3. 重要程度视觉分层（标题、粗体、引用）
4. 目录导航快速跳转

### 4.5 MVP 实现路径

**Phase 1: 核心技能**
- 实现 `/discover` 命令
- 需求访谈问答流程
- 基础 PRD 模板输出

**Phase 2: 调研增强**
- 集成 Web Search
- 竞品分析能力
- 市场调研整合

**Phase 3: 计划生成**
- `/plan` 命令
- 任务分解
- 与 Taskmaster 格式兼容

**Phase 4: 优化迭代**
- 渐进式披露模板优化
- 多模板支持
- 团队协作特性

---

## 五、风险与建议

### 5.1 避免过度设计

| 不要 | 要 |
|--------|------|
| 复杂的 MCP 服务器 | 简单的 Skills + Commands |
| 自定义 UI | 利用 Markdown 原生能力 |
| 所有功能一次到位 | MVP 迭代 |
| 重新发明轮子 | 复用 Taskmaster 格式 |

### 5.2 差异化聚焦

**核心差异点**：
1. **渐进式披露**：这是其他工具没有强调的
2. **中文优先**：面向中文用户优化
3. **全流程覆盖**：不只是 PRD，还有研发计划

### 5.3 下一步行动

1. [ ] 确认目标用户（个人开发者 vs 团队）
2. [ ] 确认优先级（需求文档 vs 研发计划）
3. [ ] 选择技术路线（纯 Skills vs Skills + MCP）
4. [ ] 开始 MVP 开发

---

## 六、参考资源

### Claude Code 官方
- [Claude Code GitHub](https://github.com/anthropics/claude-code)
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)

### 优秀项目
- [PRD-Taskmaster](https://github.com/anombyte93/prd-taskmaster)
- [ShipSpec](https://github.com/jsegov/shipspec-claude-code-plugin)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)
- [ChatPRD](https://www.chatprd.ai/)

### 渐进式披露
- [NN/g Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
- [IxDF Progressive Disclosure](https://www.interaction-design.org/literature/topics/progressive-disclosure)
